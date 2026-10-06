import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readdir, readFile, stat } from "fs/promises";
import { join, resolve } from "path";
import { createReadStream } from "fs";
import { createInterface } from "readline";

const ROOT = resolve(import.meta.dirname, "..");
const DIRS = {
  skills: join(ROOT, "skills"),
  agents: join(ROOT, "agents"),
  subagents: join(ROOT, "subagents"),
  plugins: join(ROOT, "plugins"),
  prompts: join(ROOT, "prompts"),
} as const;

// ============================================================
// TYPES
// ============================================================

interface ParsedMeta {
  name: string;
  description: string;
  type?: string;
  source?: string;
  topics?: string[];
  model?: string;
  games?: string[];
  engines?: string[];
}

interface ParsedFile {
  meta: ParsedMeta;
  body: string;
}

interface CategorizedFile extends ParsedFile {
  category?: string;
}

interface SkillIndex {
  name: string;
  description: string;
  type: string;
  topics: string[];
  hasSource: boolean;
  searchText: string;
}

// ============================================================
// IN-MEMORY INDEX
// ============================================================

let _index: Map<string, SkillIndex> | null = null;
let _indexTime = 0;
const INDEX_TTL = 120_000;

async function getIndex(): Promise<Map<string, SkillIndex>> {
  const now = Date.now();
  if (_index && now - _indexTime < INDEX_TTL) return _index;

  const entries = await readdir(DIRS.skills, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  const idx = new Map<string, SkillIndex>();

  const batch = dirs.map(async (name) => {
    const content = await safeRead(join(DIRS.skills, name, "SKILL.md"));
    if (!content) return;
    const parsed = parseFrontmatter(content);
    const hasSource = await fileExists(join(DIRS.skills, name, "source.txt"));
    const topics = parsed.meta.topics ?? [];
    const searchText = [
      name, parsed.meta.name, parsed.meta.description, ...topics,
      ...(parsed.meta.games ?? []), ...(parsed.meta.engines ?? []),
    ].join(" ").toLowerCase();

    idx.set(name, {
      name,
      description: parsed.meta.description,
      type: parsed.meta.type ?? "unknown",
      topics,
      hasSource,
      searchText,
    });
  });

  await Promise.all(batch);
  _index = idx;
  _indexTime = now;
  return idx;
}

// Component caches
const _componentCache = new Map<string, { items: CategorizedFile[]; time: number }>();
const COMP_TTL = 60_000;

async function getCachedComponents(dir: string): Promise<CategorizedFile[]> {
  const now = Date.now();
  const cached = _componentCache.get(dir);
  if (cached && now - cached.time < COMP_TTL) return cached.items;
  const items = await listMdFiles(dir);
  _componentCache.set(dir, { items, time: now });
  return items;
}

// ============================================================
// CORE HELPERS
// ============================================================

function parseFrontmatter(content: string): ParsedFile {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: { name: "", description: "" }, body: content };

  const raw = match[1];
  const body = match[2].trim();

  const str = (key: string) => raw.match(new RegExp(`^${key}:\\s*"?(.+?)"?$`, "m"))?.[1]?.trim();
  const arr = (key: string) => {
    const m = raw.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`));
    return m ? m[1].split(",").map((t) => t.trim().replace(/^['"]|['"]$/g, "")).filter(Boolean) : undefined;
  };

  return {
    meta: {
      name: str("name") ?? "",
      description: str("description") ?? "",
      type: str("type"),
      source: str("source"),
      model: str("model"),
      topics: arr("topics"),
      games: arr("games"),
      engines: arr("engines"),
    },
    body,
  };
}

async function safeRead(path: string): Promise<string | null> {
  try {
    return await readFile(path, "utf-8");
  } catch {
    return null;
  }
}

async function fileExists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function listMdFiles(dir: string, category?: string): Promise<CategorizedFile[]> {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    const results: CategorizedFile[] = [];
    for (const e of entries) {
      if (e.isDirectory()) {
        const sub = await listMdFiles(join(dir, e.name), e.name);
        results.push(...sub);
      } else if (e.name.endsWith(".md")) {
        const content = await safeRead(join(dir, e.name));
        if (content) {
          const parsed = parseFrontmatter(content);
          results.push({ ...parsed, category });
        }
      }
    }
    return results;
  } catch {
    return [];
  }
}

async function findMdByName(dir: string, name: string): Promise<string | null> {
  const direct = join(dir, `${name}.md`);
  if (await fileExists(direct)) return direct;
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) {
        const sub = join(dir, e.name, `${name}.md`);
        if (await fileExists(sub)) return sub;
      }
    }
  } catch {}
  return null;
}

async function readMdByName(dir: string, name: string): Promise<ParsedFile | null> {
  const path = await findMdByName(dir, name);
  if (!path) return null;
  const content = await safeRead(path);
  return content ? parseFrontmatter(content) : null;
}

async function readSkill(name: string): Promise<ParsedFile | null> {
  const content = await safeRead(join(DIRS.skills, name, "SKILL.md"));
  return content ? parseFrontmatter(content) : null;
}

function ok(text: string) {
  return { content: [{ type: "text" as const, text }] };
}

function err(text: string) {
  return { content: [{ type: "text" as const, text }], isError: true as const };
}

function notFound(kind: string, name: string) {
  return err(`${kind} "${name}" not found. Use list_${kind.toLowerCase()}s to see available options.`);
}

// ============================================================
// GREP ENGINE -- streaming line search through source.txt
// ============================================================

async function grepFile(filePath: string, pattern: RegExp, maxMatches: number, contextLines: number): Promise<{ line: number; text: string }[]> {
  return new Promise((resolve) => {
    const matches: { line: number; text: string }[] = [];
    let lineNum = 0;
    const buffer: string[] = [];

    try {
      const rl = createInterface({
        input: createReadStream(filePath, { encoding: "utf-8", highWaterMark: 64 * 1024 }),
        crlfDelay: Infinity,
      });

      rl.on("line", (line) => {
        lineNum++;
        buffer.push(line);
        if (buffer.length > contextLines * 2 + 1) buffer.shift();

        if (pattern.test(line)) {
          matches.push({ line: lineNum, text: line.trimEnd().slice(0, 200) });
          if (matches.length >= maxMatches) {
            rl.close();
            rl.removeAllListeners();
          }
        }
      });

      rl.on("close", () => resolve(matches));
      rl.on("error", () => resolve(matches));
    } catch {
      resolve(matches);
    }
  });
}

// ============================================================
// FORMATTERS
// ============================================================

function formatSkillCompact(name: string, meta: { description: string; type?: string }, hasSrc: boolean): string {
  const tags = [meta.type ?? "unknown", hasSrc ? "has-source" : "no-source"].join(", ");
  return `- **${name}** [${tags}]: ${meta.description}`;
}

function formatSkillFull(name: string, parsed: ParsedFile, hasSrc: boolean): string {
  const lines = [
    `# ${parsed.meta.name || name}`,
    "",
    `**Description:** ${parsed.meta.description}`,
    `**Type:** ${parsed.meta.type ?? "unknown"}`,
    `**Source:** ${parsed.meta.source ?? "original"}`,
    `**Has source code:** ${hasSrc}`,
  ];
  if (parsed.meta.topics?.length) lines.push(`**Topics:** ${parsed.meta.topics.join(", ")}`);
  if (parsed.meta.games?.length) lines.push(`**Games:** ${parsed.meta.games.join(", ")}`);
  if (parsed.meta.engines?.length) lines.push(`**Engines:** ${parsed.meta.engines.join(", ")}`);
  lines.push("", "---", "", parsed.body);
  return lines.join("\n");
}

function formatComponentList(kind: string, items: CategorizedFile[]): string {
  if (!items.length) return `No ${kind}s found.`;
  const grouped = new Map<string, CategorizedFile[]>();
  for (const item of items) {
    const cat = item.category ?? "uncategorized";
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push(item);
  }
  const sections: string[] = [`Available ${kind}s (${items.length}):\n`];
  for (const [cat, catItems] of grouped) {
    sections.push(`### ${cat} (${catItems.length})\n${catItems.map((i) => `- **${i.meta.name}**: ${i.meta.description}`).join("\n")}\n`);
  }
  return sections.join("\n");
}

function formatComponent(kind: string, parsed: ParsedFile): string {
  const lines = [`# ${kind}: ${parsed.meta.name}`, "", `**Description:** ${parsed.meta.description}`];
  if (parsed.meta.model) lines.push(`**Model:** ${parsed.meta.model}`);
  lines.push("", "---", "", parsed.body);
  return lines.join("\n");
}

// ============================================================
// SCORED SEARCH
// ============================================================

function scoreSkill(idx: SkillIndex, keywords: string[]): number {
  let score = 0;
  const nameLc = idx.name.toLowerCase();
  for (const kw of keywords) {
    if (nameLc.includes(kw)) score += 5;
    else if (idx.searchText.includes(kw)) score += 2;
  }
  return score;
}

// ============================================================
// SERVER
// ============================================================

const server = new McpServer({
  name: "mcp-gamehacking",
  version: "3.0.0",
});

// ============================================================
// MCP RESOURCES
// ============================================================

server.resource(
  "library-stats",
  "gamehacking://stats",
  { description: "Skill library statistics overview" },
  async () => {
    const idx = await getIndex();
    let withSource = 0;
    let agsCount = 0;
    const types: Record<string, number> = {};

    for (const [name, skill] of idx) {
      if (skill.hasSource) withSource++;
      if (name.startsWith("ags-")) agsCount++;
      types[skill.type] = (types[skill.type] ?? 0) + 1;
    }

    const typeStr = Object.entries(types).sort((a, b) => b[1] - a[1]).map(([k, v]) => `  ${k}: ${v}`).join("\n");

    return {
      contents: [{
        uri: "gamehacking://stats",
        mimeType: "text/markdown",
        text: `# Skill Library Stats\n\n- **Total:** ${idx.size}\n- **Hand-written:** ${idx.size - agsCount}\n- **Archived (ags-):** ${agsCount}\n- **With source:** ${withSource}\n\n**By type:**\n${typeStr}`,
      }],
    };
  }
);

server.resource(
  "agent",
  new ResourceTemplate("gamehacking://agents/{name}", { list: undefined }),
  { description: "Agent definition by name" },
  async (uri, { name }) => {
    const parsed = await readMdByName(DIRS.agents, name as string);
    if (!parsed) return { contents: [{ uri: uri.href, mimeType: "text/plain", text: `Agent "${name}" not found.` }] };
    return { contents: [{ uri: uri.href, mimeType: "text/markdown", text: formatComponent("Agent", parsed) }] };
  }
);

server.resource(
  "subagent",
  new ResourceTemplate("gamehacking://subagents/{name}", { list: undefined }),
  { description: "Subagent definition by name" },
  async (uri, { name }) => {
    const parsed = await readMdByName(DIRS.subagents, name as string);
    if (!parsed) return { contents: [{ uri: uri.href, mimeType: "text/plain", text: `Subagent "${name}" not found.` }] };
    return { contents: [{ uri: uri.href, mimeType: "text/markdown", text: formatComponent("Subagent", parsed) }] };
  }
);

server.resource(
  "plugin",
  new ResourceTemplate("gamehacking://plugins/{name}", { list: undefined }),
  { description: "Plugin definition by name" },
  async (uri, { name }) => {
    const parsed = await readMdByName(DIRS.plugins, name as string);
    if (!parsed) return { contents: [{ uri: uri.href, mimeType: "text/plain", text: `Plugin "${name}" not found.` }] };
    return { contents: [{ uri: uri.href, mimeType: "text/markdown", text: formatComponent("Plugin", parsed) }] };
  }
);

server.resource(
  "skill",
  new ResourceTemplate("gamehacking://skills/{name}", { list: undefined }),
  { description: "Skill SKILL.md content by name" },
  async (uri, { name }) => {
    const n = name as string;
    const skill = await readSkill(n);
    if (!skill) return { contents: [{ uri: uri.href, mimeType: "text/plain", text: `Skill "${n}" not found.` }] };
    const hasSrc = await fileExists(join(DIRS.skills, n, "source.txt"));
    return { contents: [{ uri: uri.href, mimeType: "text/markdown", text: formatSkillFull(n, skill, hasSrc) }] };
  }
);

// ============================================================
// MCP PROMPTS (native)
// ============================================================

server.prompt(
  "analyze-cheat",
  "Full architecture analysis of a cheat project from the skill library",
  { project: z.string().describe("Skill/project name (kebab-case)") },
  async ({ project }) => {
    const skill = await readSkill(project);
    const hasSrc = skill ? await fileExists(join(DIRS.skills, project, "source.txt")) : false;
    const intro = skill ? formatSkillFull(project, skill, hasSrc) : `Project "${project}" not found in library.`;
    return {
      messages: [{
        role: "user",
        content: { type: "text", text: `${intro}\n\nAnalyze this cheat project:\n1. Architecture (internal/external/overlay/DMA/hybrid)\n2. Engine target and version\n3. Memory access method (driver/DMA/hypervisor/direct)\n4. Injection chain\n5. Stealth measures\n6. Detection surface per anti-cheat\n7. Notable techniques worth extracting` },
      }],
    };
  }
);

server.prompt(
  "find-bypass",
  "Research bypass techniques for a specific anti-cheat system",
  { anticheat: z.string().describe("Anti-cheat name: battleye, eac, vanguard, vac, faceit, byfron") },
  async ({ anticheat }) => {
    const idx = await getIndex();
    const kw = anticheat.toLowerCase();
    const relevant: string[] = [];
    for (const [name, skill] of idx) {
      if (skill.searchText.includes(kw)) relevant.push(`- **${name}**: ${skill.description}`);
      if (relevant.length >= 30) break;
    }
    return {
      messages: [{
        role: "user",
        content: { type: "text", text: `# Bypass Research: ${anticheat}\n\nRelevant projects in library (${relevant.length}):\n${relevant.join("\n")}\n\nBased on these projects and your knowledge:\n1. Current detection vectors used by ${anticheat}\n2. Known bypass techniques (kernel, HV, DMA, usermode)\n3. Detection risk assessment per technique\n4. Recommended approach for 2024+\n5. Required tooling and prerequisites` },
      }],
    };
  }
);

server.prompt(
  "reverse-binary",
  "Structured workflow for reversing a game binary",
  {
    game: z.string().describe("Game name"),
    engine: z.string().optional().describe("Engine if known: unreal, unity, source, custom"),
  },
  async ({ game, engine }) => {
    const idx = await getIndex();
    const kws = [game.toLowerCase(), ...(engine ? [engine.toLowerCase()] : [])];
    const relevant: string[] = [];
    for (const [name, skill] of idx) {
      if (kws.some((k) => skill.searchText.includes(k))) {
        relevant.push(`- **${name}**: ${skill.description}`);
        if (relevant.length >= 20) break;
      }
    }
    return {
      messages: [{
        role: "user",
        content: { type: "text", text: `# Reverse Engineering: ${game}${engine ? ` (${engine})` : ""}\n\nRelevant projects:\n${relevant.join("\n")}\n\nProvide a structured RE workflow:\n1. Static analysis setup (IDA/Ghidra config, SDK generation)\n2. Dynamic analysis (debugger attach, bypass anti-debug)\n3. Key structures to find (player, entity list, camera, world)\n4. Offset extraction methodology\n5. Validation and testing approach` },
      }],
    };
  }
);

server.prompt(
  "build-esp",
  "Design an ESP system for a specific game and engine",
  {
    game: z.string().describe("Target game"),
    render_method: z.string().optional().describe("Render method: overlay, internal, dxgi, canvas"),
  },
  async ({ game, render_method }) => ({
    messages: [{
      role: "user",
      content: { type: "text", text: `# ESP System Design: ${game}\nRender method: ${render_method ?? "auto-select"}\n\nDesign a complete ESP system:\n1. Entity scanning (world -> player array -> positions)\n2. World-to-screen projection\n3. Bone-based skeleton ESP\n4. Bounding boxes (2D and 3D)\n5. Health/shield bars\n6. Distance and name labels\n7. Visibility checks\n8. Render pipeline (${render_method ?? "recommend best approach"})\n9. Thread safety (scanner thread vs render thread)\n10. Performance optimization` },
    }],
  })
);

server.prompt(
  "write-driver",
  "Design a kernel driver for game memory access",
  {
    method: z.string().optional().describe("Access method: ioctl, shared-memory, hypervisor, dma"),
  },
  async ({ method }) => ({
    messages: [{
      role: "user",
      content: { type: "text", text: `# Kernel Driver Design\nAccess method: ${method ?? "IOCTL-based"}\n\nDesign a kernel driver for game memory R/W:\n1. Driver entry and device creation\n2. IOCTL dispatch (read/write/get-module)\n3. Process attachment (KeStackAttachProcess vs MmCopyVirtualMemory vs physical)\n4. CR3-based physical memory translation\n5. Stealth loading (manual map, vulnerable driver chain, EFI)\n6. Anti-detection (PiDDB cleanup, MmUnloadedDrivers, BigPool)\n7. Communication channel security\n8. Cleanup and unload` },
    }],
  })
);

server.prompt(
  "compare-projects",
  "Compare two cheat projects side by side",
  {
    project_a: z.string().describe("First project name"),
    project_b: z.string().describe("Second project name"),
  },
  async ({ project_a, project_b }) => {
    const a = await readSkill(project_a);
    const b = await readSkill(project_b);
    const aHas = a ? await fileExists(join(DIRS.skills, project_a, "source.txt")) : false;
    const bHas = b ? await fileExists(join(DIRS.skills, project_b, "source.txt")) : false;
    const aText = a ? formatSkillFull(project_a, a, aHas) : `"${project_a}" not found.`;
    const bText = b ? formatSkillFull(project_b, b, bHas) : `"${project_b}" not found.`;
    return {
      messages: [{
        role: "user",
        content: { type: "text", text: `# Project Comparison\n\n## Project A\n${aText}\n\n## Project B\n${bText}\n\nCompare these projects:\n1. Architecture and design approach\n2. Engine/game targeting\n3. Memory access method\n4. Stealth and anti-detection\n5. Feature completeness\n6. Code quality and maintainability\n7. Which techniques from each are worth adopting` },
      }],
    };
  }
);

// ============================================================
// WORKFLOW TOOLS
// ============================================================

server.tool(
  "research_technique",
  "Research a game hacking technique: finds relevant skills by scored keyword search across the indexed library. Returns consolidated briefing.",
  {
    technique: z.string().describe("Technique to research, e.g. 'DMA memory read', 'EPT hook', 'silent aim', 'driver communication'"),
    detail: z.enum(["concise", "detailed"]).default("concise").describe("Response detail level"),
    max_results: z.number().min(1).max(50).default(10).describe("Max skills to include"),
  },
  async ({ technique, detail, max_results }) => {
    const idx = await getIndex();
    const keywords = technique.toLowerCase().split(/[\s,_-]+/).filter((w) => w.length > 2);
    const scored: Array<{ name: string; score: number; idx: SkillIndex }> = [];

    for (const [name, skill] of idx) {
      const score = scoreSkill(skill, keywords);
      if (score > 0) scored.push({ name, score, idx: skill });
    }

    scored.sort((a, b) => b.score - a.score);
    const top = scored.slice(0, max_results);

    if (!top.length) return err(`No skills found for "${technique}". Try broader keywords.`);

    let output = `# Research: ${technique}\n\nFound ${scored.length} relevant skills (showing top ${top.length}):\n\n`;

    if (detail === "detailed") {
      for (const { name } of top) {
        const parsed = await readSkill(name);
        if (parsed) output += formatSkillFull(name, parsed, scored.find((s) => s.name === name)?.idx.hasSource ?? false) + "\n\n---\n\n";
      }
    } else {
      for (const { name, idx: skill } of top) {
        output += formatSkillCompact(name, { description: skill.description, type: skill.type }, skill.hasSource) + "\n";
      }
    }

    if (scored.length > max_results) {
      output += `\n_${scored.length - max_results} more results. Increase max_results or refine query._`;
    }

    return ok(output);
  }
);

server.tool(
  "analyze_project",
  "Deep-analyze an archived project: reads SKILL.md + source code, classifies technique, provides structured assessment.",
  {
    name: z.string().describe("Skill/project folder name (kebab-case)"),
    focus: z.enum(["architecture", "injection", "stealth", "detection", "all"]).default("all"),
    source_lines: z.number().min(50).max(2000).default(500).describe("Max source lines to include"),
  },
  async ({ name, focus, source_lines }) => {
    const skill = await readSkill(name);
    if (!skill) return notFound("Skill", name);

    const hasSrc = await fileExists(join(DIRS.skills, name, "source.txt"));
    let output = formatSkillFull(name, skill, hasSrc);

    if (hasSrc) {
      const src = await safeRead(join(DIRS.skills, name, "source.txt"));
      if (src) {
        const lines = src.split("\n").slice(0, source_lines);
        output += `\n\n## Source Code (first ${lines.length} lines)\n\n\`\`\`\n${lines.join("\n")}\n\`\`\``;
      }
    }

    const focusMap: Record<string, string> = {
      architecture: "- Architecture type (internal/external/overlay/DMA/EFI/hybrid)\n- Engine target\n- Memory access method\n- Thread model",
      injection: "- Injection technique\n- Loading method\n- Privilege requirements\n- Vulnerable drivers used",
      stealth: "- Hiding techniques\n- Trace cleanup\n- Anti-debug/anti-analysis\n- Detection evasion",
      detection: "- Detection surface per AC (BE/EAC/Vanguard/VAC)\n- Risk rating\n- Detectable artifacts\n- Mitigation options",
      all: "- Full architecture classification\n- Injection and loading chain\n- Stealth measures\n- Detection surface\n- Notable techniques",
    };

    output += `\n\n## Analysis Focus: ${focus}\n\n${focusMap[focus] ?? focusMap.all}`;
    return ok(output);
  }
);

server.tool(
  "get_agent_briefing",
  "Load an agent definition with all available subagents and plugins listed. Returns a ready-to-use system prompt.",
  {
    agent: z.string().describe("Agent name (kebab-case). Use list_agents to see all 75 available agents."),
  },
  async ({ agent }) => {
    const parsed = await readMdByName(DIRS.agents, agent);
    if (!parsed) return notFound("Agent", agent);

    const subagents = await getCachedComponents(DIRS.subagents);
    const plugins = await getCachedComponents(DIRS.plugins);

    let output = formatComponent("Agent", parsed);
    output += "\n\n## Available Subagents\n\n";
    output += subagents.map((s) => `- **${s.meta.name}**: ${s.meta.description}`).join("\n");
    output += "\n\n## Available Plugins\n\n";
    output += plugins.map((p) => `- **${p.meta.name}**: ${p.meta.description}`).join("\n");

    return ok(output);
  }
);

// ============================================================
// GREP / FULL-TEXT SEARCH
// ============================================================

server.tool(
  "grep_sources",
  "Full-text search across all 3,985 source code archives. Streams through source.txt files matching a regex pattern. Use for finding specific offsets, function names, patterns, struct definitions.",
  {
    pattern: z.string().min(2).describe("Regex pattern to search. Examples: '0x447D410', 'ProcessEvent', 'class APlayerController', 'CR3'"),
    case_sensitive: z.boolean().default(false),
    max_files: z.number().min(1).max(100).default(20).describe("Max files to search (stops after this many hits)"),
    max_matches_per_file: z.number().min(1).max(50).default(5).describe("Max matches per file"),
    filter: z.string().optional().describe("Only search skills whose name contains this substring"),
  },
  async ({ pattern, case_sensitive, max_files, max_matches_per_file, filter }) => {
    const idx = await getIndex();
    let regex: RegExp;
    try {
      regex = new RegExp(pattern, case_sensitive ? "" : "i");
    } catch (e) {
      return err(`Invalid regex: ${e}`);
    }

    const results: Array<{ skill: string; matches: { line: number; text: string }[] }> = [];
    let filesSearched = 0;

    for (const [name, skill] of idx) {
      if (!skill.hasSource) continue;
      if (filter && !name.toLowerCase().includes(filter.toLowerCase())) continue;

      const filePath = join(DIRS.skills, name, "source.txt");
      const matches = await grepFile(filePath, regex, max_matches_per_file, 0);

      if (matches.length > 0) {
        results.push({ skill: name, matches });
        if (results.length >= max_files) break;
      }
      filesSearched++;
    }

    if (!results.length) return err(`No matches for "${pattern}" in ${filesSearched} source archives.`);

    let output = `# Grep: \`${pattern}\`\n\nFound in ${results.length} projects (searched ${filesSearched}):\n\n`;
    for (const { skill, matches } of results) {
      output += `## ${skill}\n`;
      for (const m of matches) {
        output += `  L${m.line}: ${m.text}\n`;
      }
      output += "\n";
    }

    return ok(output);
  }
);

// ============================================================
// OFFSET CROSS-REFERENCE
// ============================================================

server.tool(
  "find_offset",
  "Cross-reference a game offset, pattern, or struct name across all archived source code. Finds every project that uses a specific offset value or field name.",
  {
    query: z.string().describe("Offset hex value (0x4F0), field name (BoneMatrix), or pattern (CompSpaceBones)"),
    max_results: z.number().min(1).max(50).default(15),
  },
  async ({ query, max_results }) => {
    const idx = await getIndex();
    let regex: RegExp;
    try {
      regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    } catch {
      regex = new RegExp(query, "i");
    }

    const results: Array<{ skill: string; matches: { line: number; text: string }[] }> = [];

    for (const [name, skill] of idx) {
      if (!skill.hasSource) continue;
      const filePath = join(DIRS.skills, name, "source.txt");
      const matches = await grepFile(filePath, regex, 3, 0);
      if (matches.length > 0) {
        results.push({ skill: name, matches });
        if (results.length >= max_results) break;
      }
    }

    if (!results.length) return err(`No projects reference "${query}".`);

    let output = `# Offset Cross-Reference: \`${query}\`\n\nFound in ${results.length} projects:\n\n`;
    for (const { skill, matches } of results) {
      output += `### ${skill}\n`;
      for (const m of matches) {
        output += `  L${m.line}: ${m.text}\n`;
      }
      output += "\n";
    }

    return ok(output);
  }
);

// ============================================================
// COMPARE PROJECTS TOOL
// ============================================================

server.tool(
  "compare_projects",
  "Side-by-side comparison of two cheat projects: architecture, techniques, features, detection surface.",
  {
    project_a: z.string().describe("First project name"),
    project_b: z.string().describe("Second project name"),
    include_source: z.boolean().default(false).describe("Include first 200 lines of source from each"),
  },
  async ({ project_a, project_b, include_source }) => {
    const a = await readSkill(project_a);
    const b = await readSkill(project_b);
    if (!a && !b) return err(`Neither "${project_a}" nor "${project_b}" found.`);

    let output = `# Comparison: ${project_a} vs ${project_b}\n\n`;

    const format = async (name: string, skill: ParsedFile | null) => {
      if (!skill) return `## ${name}\n\nNot found in library.\n`;
      const hasSrc = await fileExists(join(DIRS.skills, name, "source.txt"));
      let text = formatSkillFull(name, skill, hasSrc);
      if (include_source && hasSrc) {
        const src = await safeRead(join(DIRS.skills, name, "source.txt"));
        if (src) {
          const lines = src.split("\n").slice(0, 200);
          text += `\n\n### Source Preview\n\`\`\`\n${lines.join("\n")}\n\`\`\``;
        }
      }
      return text;
    };

    output += await format(project_a, a);
    output += "\n\n---\n\n";
    output += await format(project_b, b);

    output += "\n\n---\n\n## Comparison Points\n\n";
    output += "1. Architecture and design approach\n2. Engine/game targeting\n3. Memory access method\n4. Stealth measures\n5. Feature set\n6. Code quality\n7. Techniques worth extracting from each";

    return ok(output);
  }
);

// ============================================================
// SKILL TOOLS -- direct access
// ============================================================

server.tool("list_skills", "List skills with optional filtering. Uses in-memory index for fast lookup.", {
  filter: z.string().optional().describe("Filter by name substring (case-insensitive)"),
  type: z.string().optional().describe("Filter by type: 'reference', 'redirect', etc."),
  has_source: z.boolean().optional().describe("Filter to only skills with/without source.txt"),
  limit: z.number().min(1).max(500).default(50),
}, async ({ filter, type, has_source, limit }) => {
  const idx = await getIndex();
  let results: SkillIndex[] = [...idx.values()];

  if (filter) {
    const lc = filter.toLowerCase();
    results = results.filter((s) => s.name.toLowerCase().includes(lc));
  }
  if (type) results = results.filter((s) => s.type === type);
  if (has_source !== undefined) results = results.filter((s) => s.hasSource === has_source);

  const sliced = results.slice(0, limit);
  const text = `Found ${results.length} skills${results.length > limit ? ` (showing first ${limit})` : ""}:\n\n${sliced.map((s) => formatSkillCompact(s.name, { description: s.description, type: s.type }, s.hasSource)).join("\n")}`;

  return ok(text);
});

server.tool("read_skill", "Read a skill's SKILL.md content with full metadata.", {
  name: z.string().describe("Skill folder name (kebab-case)"),
}, async ({ name }) => {
  const skill = await readSkill(name);
  if (!skill) return notFound("Skill", name);
  const hasSrc = await fileExists(join(DIRS.skills, name, "source.txt"));
  return ok(formatSkillFull(name, skill, hasSrc));
});

server.tool("read_source", "Read a project's source code snapshot with pagination.", {
  name: z.string().describe("Skill folder name"),
  offset: z.number().min(0).default(0).describe("Start line (0-based)"),
  limit: z.number().min(1).max(2000).default(200).describe("Max lines"),
}, async ({ name, offset, limit }) => {
  const content = await safeRead(join(DIRS.skills, name, "source.txt"));
  if (!content) return err(`No source.txt for "${name}".`);

  const lines = content.split("\n");
  const slice = lines.slice(offset, offset + limit);

  return ok(`Source: ${name} (lines ${offset}-${offset + slice.length} of ${lines.length})\n\n${slice.join("\n")}${offset + limit < lines.length ? `\n\n_${lines.length - offset - limit} more lines. Use offset=${offset + limit} to continue._` : ""}`);
});

server.tool("search_skills", "Scored keyword search across the indexed skill library (name + description + topics + games + engines).", {
  query: z.string().min(2).describe("Search query. Examples: 'kdmapper', 'DMA', 'valorant aimbot'"),
  has_source: z.boolean().optional().describe("Filter to skills with/without source code"),
  limit: z.number().min(1).max(100).default(20),
}, async ({ query, has_source, limit }) => {
  const idx = await getIndex();
  const keywords = query.toLowerCase().split(/[\s,]+/).filter((w) => w.length >= 2);
  const matches: Array<{ name: string; desc: string; score: number }> = [];

  for (const [, skill] of idx) {
    if (has_source !== undefined && skill.hasSource !== has_source) continue;
    const score = scoreSkill(skill, keywords);
    if (score > 0) matches.push({ name: skill.name, desc: skill.description, score });
  }

  matches.sort((a, b) => b.score - a.score);
  const top = matches.slice(0, limit);

  if (!top.length) return err(`No skills matching "${query}".`);

  return ok(`Found ${matches.length} skills for "${query}" (top ${top.length}):\n\n${top.map((m) => `- **${m.name}** (score:${m.score}): ${m.desc}`).join("\n")}${matches.length > limit ? `\n\n_${matches.length - limit} more. Increase limit or refine._` : ""}`);
});

server.tool("skill_stats", "Library statistics from the in-memory index.", {}, async () => {
  const idx = await getIndex();
  let withSource = 0;
  let agsCount = 0;
  const types: Record<string, number> = {};
  const topicCount: Record<string, number> = {};

  for (const [name, skill] of idx) {
    if (skill.hasSource) withSource++;
    if (name.startsWith("ags-")) agsCount++;
    types[skill.type] = (types[skill.type] ?? 0) + 1;
    for (const t of skill.topics) {
      topicCount[t] = (topicCount[t] ?? 0) + 1;
    }
  }

  const typeStr = Object.entries(types).sort((a, b) => b[1] - a[1]).map(([k, v]) => `  ${k}: ${v}`).join("\n");
  const topTopics = Object.entries(topicCount).sort((a, b) => b[1] - a[1]).slice(0, 20).map(([k, v]) => `  ${k}: ${v}`).join("\n");

  return ok(`# Skill Library Stats\n\n- **Total:** ${idx.size}\n- **Hand-written:** ${idx.size - agsCount}\n- **Archived (ags-):** ${agsCount}\n- **With source:** ${withSource}\n\n**By type:**\n${typeStr}\n\n**Top 20 topics:**\n${topTopics}`);
});

// ============================================================
// COMPONENT TOOLS
// ============================================================

const componentTools = [
  { singular: "agent", plural: "agents", dir: DIRS.agents },
  { singular: "subagent", plural: "subagents", dir: DIRS.subagents },
  { singular: "plugin", plural: "plugins", dir: DIRS.plugins },
  { singular: "prompt", plural: "prompts", dir: DIRS.prompts },
] as const;

for (const { singular, plural, dir } of componentTools) {
  server.tool(
    `list_${plural}`,
    `List all available ${plural} grouped by category.`,
    {
      category: z.string().optional().describe("Filter by category/subdirectory name"),
    },
    async ({ category }: { category?: string }) => {
      let items = await getCachedComponents(dir);
      if (category) {
        const lc = category.toLowerCase();
        items = items.filter((i) => i.category?.toLowerCase() === lc);
      }
      return ok(formatComponentList(singular, items));
    }
  );

  server.tool(
    `read_${singular}`,
    `Read a ${singular}'s full definition and system prompt.`,
    {
      name: z.string().describe(`${singular} name (without .md extension). Use list_${plural} to see available options.`),
    },
    async ({ name }: { name: string }) => {
      const parsed = await readMdByName(dir, name);
      if (!parsed) return notFound(singular.charAt(0).toUpperCase() + singular.slice(1), name);
      return ok(formatComponent(singular.charAt(0).toUpperCase() + singular.slice(1), parsed));
    }
  );
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
