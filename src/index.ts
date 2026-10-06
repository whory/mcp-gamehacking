import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readdir, readFile, stat } from "fs/promises";
import { join, resolve } from "path";

// ============================================================
// CORE INFRASTRUCTURE
// ============================================================

const ROOT = resolve(import.meta.dirname, "..");
const DIRS = {
  skills: join(ROOT, "skills"),
  agents: join(ROOT, "agents"),
  subagents: join(ROOT, "subagents"),
  plugins: join(ROOT, "plugins"),
  prompts: join(ROOT, "prompts"),
} as const;

interface ParsedMeta {
  name: string;
  description: string;
  type?: string;
  source?: string;
  topics?: string[];
  model?: string;
}

interface ParsedFile {
  meta: ParsedMeta;
  body: string;
}

function parseFrontmatter(content: string): ParsedFile {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: { name: "", description: "" }, body: content };

  const raw = match[1];
  const body = match[2].trim();

  const str = (key: string) => raw.match(new RegExp(`^${key}:\\s*"?(.+?)"?$`, "m"))?.[1]?.trim();
  const topicsMatch = raw.match(/topics:\s*\[([^\]]*)\]/);

  return {
    meta: {
      name: str("name") ?? "",
      description: str("description") ?? "",
      type: str("type"),
      source: str("source"),
      model: str("model"),
      topics: topicsMatch
        ? topicsMatch[1].split(",").map((t) => t.trim().replace(/^['"]|['"]$/g, ""))
        : undefined,
    },
    body,
  };
}

// --- Shared helpers ---

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

interface CategorizedFile extends ParsedFile {
  category?: string;
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

let _skillListCache: string[] | null = null;
let _skillListTime = 0;
const CACHE_TTL = 30_000;

async function listSkillDirs(): Promise<string[]> {
  const now = Date.now();
  if (_skillListCache && now - _skillListTime < CACHE_TTL) return _skillListCache;
  const entries = await readdir(DIRS.skills, { withFileTypes: true });
  _skillListCache = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  _skillListTime = now;
  return _skillListCache;
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

// --- Response formatting ---

function formatSkillCompact(name: string, meta: ParsedMeta, hasSrc: boolean): string {
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
// SERVER
// ============================================================

const server = new McpServer({
  name: "mcp-gamehacking",
  version: "2.0.0",
});

// ============================================================
// WORKFLOW TOOLS -- high-level, task-oriented
// ============================================================

server.tool(
  "research_technique",
  "Research a game hacking technique end-to-end: finds relevant skills, reads their content, and returns a consolidated briefing. Use this instead of calling list+read manually.",
  {
    technique: z.string().describe("Technique to research, e.g. 'DMA memory read', 'EPT hook', 'silent aim', 'driver communication'"),
    detail: z.enum(["concise", "detailed"]).default("concise").describe("Response detail level"),
    max_results: z.number().min(1).max(50).default(10).describe("Max skills to include"),
  },
  async ({ technique, detail, max_results }) => {
    const all = await listSkillDirs();
    const lc = technique.toLowerCase();
    const keywords = lc.split(/[\s,_-]+/).filter((w) => w.length > 2);
    const scored: Array<{ name: string; score: number; parsed: ParsedFile }> = [];

    for (const name of all) {
      let score = 0;
      const nameLc = name.toLowerCase();

      for (const kw of keywords) {
        if (nameLc.includes(kw)) score += 3;
      }

      if (score === 0 && !nameLc.includes(lc.replace(/\s+/g, "-"))) {
        const parsed = await readSkill(name);
        if (!parsed) continue;
        const text = [parsed.meta.description, ...(parsed.meta.topics ?? [])].join(" ").toLowerCase();
        for (const kw of keywords) {
          if (text.includes(kw)) score += 1;
        }
        if (score > 0) scored.push({ name, score, parsed });
        continue;
      }

      const parsed = await readSkill(name);
      if (parsed) {
        const text = [parsed.meta.description, ...(parsed.meta.topics ?? [])].join(" ").toLowerCase();
        for (const kw of keywords) {
          if (text.includes(kw)) score += 1;
        }
        scored.push({ name, score, parsed });
      }
    }

    scored.sort((a, b) => b.score - a.score);
    const top = scored.slice(0, max_results);

    if (!top.length) {
      return err(`No skills found for "${technique}". Try broader keywords or use list_skills with a filter.`);
    }

    let output = `# Research: ${technique}\n\nFound ${scored.length} relevant skills (showing top ${top.length}):\n\n`;

    for (const { name, parsed } of top) {
      const hasSrc = await fileExists(join(DIRS.skills, name, "source.txt"));
      if (detail === "detailed") {
        output += formatSkillFull(name, parsed, hasSrc) + "\n\n---\n\n";
      } else {
        output += formatSkillCompact(name, parsed.meta, hasSrc) + "\n";
      }
    }

    if (scored.length > max_results) {
      output += `\n_${scored.length - max_results} more results available. Increase max_results or refine your query._`;
    }

    return ok(output);
  }
);

server.tool(
  "analyze_project",
  "Analyze an archived project: reads its SKILL.md and source code, classifies the technique, and provides a structured assessment. Complete workflow -- no need to call read_skill + read_source separately.",
  {
    name: z.string().describe("Skill/project folder name (kebab-case)"),
    focus: z.enum(["architecture", "injection", "stealth", "detection", "all"]).default("all").describe("Analysis focus area"),
    source_lines: z.number().min(50).max(1000).default(300).describe("Max source lines to analyze"),
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

    output += `\n\n## Analysis Request\n\nFocus: **${focus}**\n\nBased on the skill description and source code above, analyze this project for:\n`;

    const focusMap: Record<string, string> = {
      architecture: "- Architecture type (internal/external/overlay/DMA/EFI/hybrid)\n- Engine target\n- Memory access method\n- Thread model",
      injection: "- Injection technique\n- Loading method\n- Privilege requirements\n- Vulnerable drivers used",
      stealth: "- Hiding techniques\n- Trace cleanup\n- Anti-debug/anti-analysis\n- Detection evasion",
      detection: "- Detection surface per AC (BE/EAC/Vanguard/VAC)\n- Risk rating\n- Detectable artifacts\n- Mitigation options",
      all: "- Full architecture classification\n- Injection and loading chain\n- Stealth measures\n- Detection surface\n- Notable techniques",
    };

    output += focusMap[focus] ?? focusMap.all;

    return ok(output);
  }
);

server.tool(
  "get_agent_briefing",
  "Get a complete agent briefing: loads the agent definition, lists its available tools, and provides the system prompt ready to use.",
  {
    agent: z.string().describe("Agent name (kebab-case). Use list_agents to see all 50 available agents."),
  },
  async ({ agent }) => {
    const parsed = await readMdByName(DIRS.agents, agent);
    if (!parsed) return notFound("Agent", agent);

    const subagents = await listMdFiles(DIRS.subagents);
    const plugins = await listMdFiles(DIRS.plugins);

    let output = formatComponent("Agent", parsed);
    output += "\n\n## Available Subagents\n\n";
    output += subagents.map((s) => `- **${s.meta.name}**: ${s.meta.description}`).join("\n");
    output += "\n\n## Available Plugins\n\n";
    output += plugins.map((p) => `- **${p.meta.name}**: ${p.meta.description}`).join("\n");

    return ok(output);
  }
);

// ============================================================
// SKILL TOOLS -- direct access
// ============================================================

server.tool("list_skills", "List skills with optional filtering by name or type. Returns compact format.", {
  filter: z.string().optional().describe("Filter by name substring (case-insensitive). Example: 'kernel', 'valorant', 'ags-kdmapper'"),
  type: z.string().optional().describe("Filter by metadata type: 'reference', 'redirect', etc."),
  limit: z.number().min(1).max(500).default(50).describe("Max results"),
}, async ({ filter, type, limit }) => {
  let all = await listSkillDirs();

  if (filter) {
    const lc = filter.toLowerCase();
    all = all.filter((s) => s.toLowerCase().includes(lc));
  }

  if (type) {
    const filtered: string[] = [];
    for (const name of all) {
      const skill = await readSkill(name);
      if (skill?.meta.type === type) filtered.push(name);
    }
    all = filtered;
  }

  const sliced = all.slice(0, limit);
  const text = `Found ${all.length} skills${all.length > limit ? ` (showing first ${limit})` : ""}:\n\n${sliced.join("\n")}`;

  return ok(text);
});

server.tool("read_skill", "Read a skill's SKILL.md content with metadata.", {
  name: z.string().describe("Skill folder name (kebab-case). Use list_skills or search_skills to find names."),
}, async ({ name }) => {
  const skill = await readSkill(name);
  if (!skill) return notFound("Skill", name);
  const hasSrc = await fileExists(join(DIRS.skills, name, "source.txt"));
  return ok(formatSkillFull(name, skill, hasSrc));
});

server.tool("read_source", "Read a project's source code snapshot with pagination.", {
  name: z.string().describe("Skill folder name"),
  offset: z.number().min(0).default(0).describe("Start line (0-based)"),
  limit: z.number().min(1).max(2000).default(200).describe("Max lines to return"),
}, async ({ name, offset, limit }) => {
  const content = await safeRead(join(DIRS.skills, name, "source.txt"));
  if (!content) return err(`No source.txt for "${name}". Use list_skills with filter to find projects with source code.`);

  const lines = content.split("\n");
  const slice = lines.slice(offset, offset + limit);

  return ok(`Source: ${name} (lines ${offset}-${offset + slice.length} of ${lines.length})\n\n${slice.join("\n")}${offset + limit < lines.length ? `\n\n_${lines.length - offset - limit} more lines. Use offset=${offset + limit} to continue._` : ""}`);
});

server.tool("search_skills", "Search skills by keyword across name, description, and topics.", {
  query: z.string().min(2).describe("Search query (min 2 chars). Examples: 'kdmapper', 'DMA', 'valorant aimbot'"),
  limit: z.number().min(1).max(100).default(20).describe("Max results"),
}, async ({ query, limit }) => {
  const all = await listSkillDirs();
  const keywords = query.toLowerCase().split(/[\s,]+/).filter((w) => w.length >= 2);
  const matches: Array<{ name: string; desc: string; score: number }> = [];

  for (const name of all) {
    const nameLc = name.toLowerCase();
    let score = 0;
    for (const kw of keywords) {
      if (nameLc.includes(kw)) score += 3;
    }

    const skill = await readSkill(name);
    if (!skill) { if (score > 0) matches.push({ name, desc: "", score }); continue; }

    const text = [skill.meta.description, ...(skill.meta.topics ?? [])].join(" ").toLowerCase();
    for (const kw of keywords) {
      if (text.includes(kw)) score += 1;
    }

    if (score > 0) matches.push({ name, desc: skill.meta.description, score });
  }

  matches.sort((a, b) => b.score - a.score);
  const top = matches.slice(0, limit);

  if (!top.length) return err(`No skills matching "${query}". Try broader terms or check spelling.`);

  return ok(`Found ${matches.length} skills for "${query}" (showing top ${top.length}):\n\n${top.map((m) => `- **${m.name}** (score:${m.score}): ${m.desc}`).join("\n")}${matches.length > limit ? `\n\n_${matches.length - limit} more. Increase limit or refine query._` : ""}`);
});

server.tool("skill_stats", "Get library statistics: total skills, source coverage, type breakdown.", {}, async () => {
  const all = await listSkillDirs();
  let withSource = 0;
  let agsCount = 0;
  const types: Record<string, number> = {};

  for (const name of all) {
    if (await fileExists(join(DIRS.skills, name, "source.txt"))) withSource++;
    if (name.startsWith("ags-")) agsCount++;
    const skill = await readSkill(name);
    const t = skill?.meta.type ?? "unknown";
    types[t] = (types[t] ?? 0) + 1;
  }

  const typeStr = Object.entries(types).sort((a, b) => b[1] - a[1]).map(([k, v]) => `  ${k}: ${v}`).join("\n");
  const handWritten = all.length - agsCount;

  return ok(`# Skill Library Stats\n\n- **Total skills:** ${all.length}\n- **Hand-written:** ${handWritten}\n- **Archived projects (ags-):** ${agsCount}\n- **With source code:** ${withSource}\n\n**By type:**\n${typeStr}`);
});

// ============================================================
// COMPONENT TOOLS -- agents, subagents, plugins, prompts
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
    `List all available ${plural} with descriptions.`,
    {},
    async () => {
      const items = await listMdFiles(dir);
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
