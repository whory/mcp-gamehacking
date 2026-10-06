# mcp-gamehacking

MCP (Model Context Protocol) server for game hacking & reverse engineering. A structured knowledge base of **4,100+ skills** with full source code archives, specialized agents, and workflow tools -- designed to be plugged into Claude, Cursor, or any MCP-compatible client.

**MCP-server for game hacking and reverse engineering.** Structured knowledge base of **4,100+ skills** with full source code archives, specialized agents, and tools -- connects to Claude, Cursor, or any MCP-compatible client.

---

## Features

### Skill Library

- **177 hand-written skills** -- deep technical references on injection, hooking, kernel drivers, anti-cheat internals, ESP/aimbot architecture, and more
- **3,985 archived projects** -- full source code snapshots from the game security ecosystem (prefixed `ags-`)
- Each skill has a `SKILL.md` (description, metadata, topics) and optionally a `source.txt` (complete source tree dump)

### Agents

| Agent | Description |
|-------|------------|
| `reverse-engineer` | Disassembly analysis, struct recovery, offset hunting, binary patching |
| `exploit-developer` | Kernel exploits, BYOVD chains, EFI persistence, privilege escalation |
| `anti-cheat-analyst` | BattlEye, EAC, Vanguard, VAC, FACEIT internals and bypass research |
| `malware-analyst` | Cheat binary analysis, unpacking, IOC extraction, technique classification |
| `cheat-developer` | ESP, aimbot, triggerbot, overlay rendering, UE/Unity/Source engine internals |
| `driver-developer` | WDM/KMDF drivers, IOCTL comm, memory R/W, stealth loading |
| `hypervisor-researcher` | Intel VMX, AMD SVM, EPT/NPT hooks, HV-based memory access |
| `android-researcher` | Zygisk, KernelSU, frida, IL2CPP dumping, native hooking |
| `network-analyst` | Game protocol RE, packet capture, MITM proxy, server emulation |
| `cs2-specialist` | Counter-Strike 2 / Source 2 internals |
| `valorant-specialist` | Valorant / UE4 fork / Vanguard interaction |
| `fortnite-specialist` | Fortnite / UE5 / EAC interaction |
| `apex-specialist` | Apex Legends / Source fork internals |
| `unreal-engine-specialist` | UE4/UE5 GObjects, GNames, ProcessEvent, SDK gen |
| `unity-specialist` | Unity Mono/IL2CPP, GameObjectManager, metadata |
| `source-engine-specialist` | Source 1/2 ConVar, NetVar, ClientClass |
| `injection-specialist` | All injection methods (manual map, reflective, APC, EFI) |
| `hooking-specialist` | All hook types (VMT, IAT, inline, EPT, syscall) |
| `obfuscation-analyst` | VMProtect, Themida, OLLVM analysis and unpacking |
| `windows-internals-agent` | EPROCESS, PEB/TEB, system calls, object manager |
| `ida-specialist` | IDA Pro scripting, plugins, FLIRT, type libraries |
| `ghidra-specialist` | Ghidra scripting, P-code, extensions |
| `dma-specialist` | DMA/FPGA memory access (PCILeech, Screamer) |
| ...and 52 more game-specific, engine-specific, technique-specific, and tool-specific agents |

### Subagents (161)

| Subagent | Purpose |
|----------|---------|
| `offset-finder` | Cross-reference game offsets across 3,900+ archived sources |
| `code-analyzer` | Classify technique, hook method, stealth measures |
| `pattern-scanner` | Generate and validate IDA-style byte patterns |
| `detection-assessor` | Assess detection risk per anti-cheat system |
| `vulnerability-scanner` | Find exploitable vulns in drivers and binaries |
| `struct-recovery` | Recover C++ structures from memory dumps or IDA |
| `binary-differ` | Diff game updates to track offset changes |
| `source-grep` | Deep search across all 3,985 source archives |
| `hook-planner` | Plan hook chains for specific objectives |
| `import-resolver` | Resolve imports for manual-mapped modules |
| `vtable-mapper` | Map virtual function tables |
| `syscall-stub-generator` | Generate direct/indirect syscall stubs |
| `bone-mapper` | Map skeleton bone indices per game |
| `ac-driver-analyzer` | Deep analysis of anti-cheat kernel driver |
| `stack-spoofer` | Spoof call stack for AC evasion |
| `shellcode-encoder` | Encode shellcode to evade signatures |
| ...and 145 more focused subagents across 16 categories |

### Plugins (114)

| Plugin | Purpose |
|--------|---------|
| `game-offset-db` | Cross-reference offset database for 60+ games |
| `technique-finder` | Find implementation examples across all source code |
| `yara-generator` | Generate YARA detection rules from cheat patterns |
| `driver-catalog` | Vulnerable driver database with exploit primitives |
| `hook-library` | All hook types with code examples and detection vectors |
| `struct-database` | Known game engine structures (UE4/UE5, Source, Unity) |
| `anti-cheat-timeline` | AC update tracking and bypass shelf-life |
| `exploit-chain-builder` | Compose multi-stage exploit chains |
| `signature-generator` | Generate and validate byte patterns |
| `cs2-offsets` / `valorant-offsets` / ... | Per-game offset databases (10 games) |
| `ue4-sdk-reference` / `ue5-sdk-reference` | Engine SDK structure references |
| `ntapi-reference` | Undocumented NT API reference |
| `syscall-table` | Windows syscall numbers per OS build |
| `battleye-detection-db` / `eac-detection-db` / ... | Per-AC detection databases |
| `offset-header-generator` / `hook-template-generator` | Code generation tools |
| ...and 99 more data, reference, and code generation plugins across 11 categories |

### Prompts (148)

| Prompt | Purpose |
|--------|---------|
| `analyze-cheat` | Full architecture analysis of a cheat project |
| `find-bypass` | Find bypass techniques for specific anti-cheat |
| `build-cheat` / `build-esp` / `build-aimbot` | Design cheat systems |
| `reverse-binary` / `reverse-unity-game` / `reverse-unreal-game` | RE workflows |
| `write-driver` / `write-injector` / `write-hook` | Implementation guides |
| `bypass-battleye` / `bypass-eac` / `bypass-vanguard` | AC bypass strategies |
| `spoof-hardware` | HWID spoofing design |
| `analyze-update` | Game update offset migration |
| `exploit-vuln-driver` / `exploit-kernel-bug` | Exploitation guides |
| `implement-backtrack` / `implement-autowall` / `implement-prediction` | Feature implementation |
| ...and 138 more prompts across 14 categories for every game hacking task |

---

## Tools (16 total)

### Workflow Tools

| Tool | Description |
|------|------------|
| `research_technique` | End-to-end technique research with scored keyword ranking |
| `analyze_project` | Full project analysis (SKILL.md + source code) |
| `get_agent_briefing` | Load agent definition with available subagents and plugins |

### Skill Tools

| Tool | Description |
|------|------------|
| `list_skills` | List/filter skills by name or type |
| `read_skill` | Read a skill SKILL.md |
| `read_source` | Read source code with pagination (50KB chunks) |
| `search_skills` | Multi-keyword scored search across names, descriptions, topics |
| `skill_stats` | Library statistics |

### Component Tools

| Tool | Description |
|------|------------|
| `list_agents` / `read_agent` | Browse and read agent definitions |
| `list_subagents` / `read_subagent` | Browse and read subagent definitions |
| `list_plugins` / `read_plugin` | Browse and read plugin definitions |
| `list_prompts` / `read_prompt` | Browse and read prompt templates |

---

## Installation

### Requirements

- Node.js 18+
- npm

### Build

```bash
cd mcp-gamehacking
npm install
npm run build
```

### Connect to Claude Code

Add to your MCP settings:

```json
{
  "mcpServers": {
    "gamehacking": {
      "command": "node",
      "args": ["/path/to/mcp-gamehacking/dist/index.js"]
    }
  }
}
```

### Connect to Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "gamehacking": {
      "command": "node",
      "args": ["/path/to/mcp-gamehacking/dist/index.js"]
    }
  }
}
```

### Connect to Cursor

Add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "gamehacking": {
      "command": "node",
      "args": ["/path/to/mcp-gamehacking/dist/index.js"]
    }
  }
}
```

---

## Usage Examples

### Research a technique

```
> research_technique("EPT hook")

Found 12 relevant skills (showing top 10):
- ags-budget-ept (score:7) -- BudgetEPT: stealthy inline EPT-like hooks...
- ags-hyper-deceit (score:6) -- HyperDeceit: HvcallCodeVa hook framework...
```

### Analyze a project

```
> analyze_project("ags-kdmapper", focus="architecture")

# kdmapper
Most popular kernel driver mapper using iqvw64e.sys...
## Source Code (first 300 lines)
...
```

### Search skills

```
> search_skills("valorant vanguard bypass")

Found 23 skills:
- vgk-internals-callbacks (score:7)
- ags-valorant-external (score:4)
```

### Agent briefing

```
> get_agent_briefing("exploit-developer")

# Agent: exploit-developer
Kernel exploit and driver development agent...
## Available Subagents: offset-finder, detection-assessor
## Available Plugins: game-offset-db, technique-finder
```

---

## Project Structure

```
mcp-gamehacking/
+-- src/index.ts              # MCP server (16 tools)
+-- dist/                      # Compiled JS
+-- skills/                    # 4,161 skill directories
|   +-- <hand-written>/        #   177 curated deep-dive skills
|   +-- ags-*/                 #   3,985 archived projects
|       +-- SKILL.md           #     description + metadata
|       +-- source.txt         #     full source tree snapshot
+-- agents/                    # 75 agents across 7 categories
|   +-- games/        (15)     #   CS2, Valorant, Fortnite, Apex, etc.
|   +-- engines/      (10)     #   UE4/5, Unity, Source, CryEngine, etc.
|   +-- anti-cheat/   (10)     #   EAC, BE, Vanguard, FACEIT, Byfron, etc.
|   +-- kernel/       (10)     #   drivers, HV, firmware, DMA, EPT
|   +-- techniques/   (10)     #   injection, hooking, obfuscation, etc.
|   +-- tools/        (10)     #   IDA, Ghidra, WinDbg, Frida, x64dbg
|   +-- core/         (10)     #   RE, exploits, cheatdev, malware, etc.
+-- subagents/                 # 161 subagents across 16 categories
|   +-- offsets/      (10)     +-- patterns/     (10)
|   +-- code-analysis/(10)     +-- anti-cheat/   (11)
|   +-- kernel/       (10)     +-- injection/    (10)
|   +-- hooks/        (10)     +-- rendering/    (10)
|   +-- memory/       (10)     +-- network/      (10)
|   +-- game-data/    (10)     +-- stealth/      (10)
|   +-- reversing/    (10)     +-- platform/     (10)
|   +-- build/        (10)     +-- testing/      (10)
+-- plugins/                   # 114 plugins across 11 categories
|   +-- game-offsets/ (11)     +-- engine-sdks/  (10)
|   +-- anti-cheat/   (10)     +-- windows-int/  (10)
|   +-- technique-ref/(13)     +-- tool-finders/ (10)
|   +-- code-gen/     (10)     +-- binary-anal/  (10)
|   +-- crypto/       (10)     +-- detection/    (10)
|   +-- rendering/    (10)
+-- prompts/                   # 148 prompts across 14 categories
|   +-- build/        (11)     +-- write/        (16)
|   +-- implement/    (11)     +-- reverse/      (10)
|   +-- bypass/       (10)     +-- analyze/      (10)
|   +-- design/       (10)     +-- exploit/      (10)
|   +-- compare/      (10)     +-- debug/        (10)
|   +-- generate/     (10)     +-- migrate/      (10)
|   +-- optimize/     (10)     +-- setup/        (10)
+-- package.json
+-- tsconfig.json
```

---

## Skill Categories

### Hand-Written (177)

| Category | Examples |
|----------|---------|
| Kernel / Drivers | kernel-cr3-physmem, kernel-hooks-ssdt, vulnerable-driver-exploits |
| Injection | reflective-dll, pe-injection-remote, early-bird-apc, threadpool-wait |
| Anti-Cheat | vanguard (15+ vgk-* skills), battleye, eac, patchguard, hvci |
| Game Engines | unreal-object-model, source-netvars, world-to-screen, present-hook |
| Obfuscation | fix-vmp-themida-ollvm, control-flow-flattening, mixed-boolean-arithmetic |
| UEFI / EFI | efi-driver-bootkit, vgk-secure-boot-spoof |
| DMA | dma, iommu, iommu-state-verification |

### Archived Projects (3,985)

Sourced from [awesome-game-security](https://github.com/gmh5225/awesome-game-security):

- **60+ games**: CS2, Valorant, Fortnite, Apex, PUBG, Rust, R6, EFT, Overwatch, Genshin, etc.
- **Techniques**: injection, hooking, DMA/FPGA, driver comm, overlays, kernel exploits
- **Anti-cheat research**: BattlEye, EAC, Vanguard, VAC, FACEIT, Byfron
- **Tools**: IDA plugins, Ghidra scripts, debugger extensions, dumpers, unpackers
- **Platforms**: Windows kernel, Android (Zygisk/KernelSU/Magisk), iOS, Linux

---

## Tech Stack

- **Runtime**: Node.js 18+
- **Language**: TypeScript
- **Protocol**: MCP via `@modelcontextprotocol/sdk`
- **Transport**: stdio

---

## License

This project aggregates publicly available research materials and open-source project snapshots for educational and security research purposes.

---

# mcp-gamehacking (RU)

MCP-сервер для геймхакинга и реверс-инжиниринга. База знаний из **4,100+ скиллов** с полными архивами исходного кода, специализированными агентами и инструментами.

## Возможности

- **177 вручную написанных скиллов** -- инъекции, хуки, ядерные драйверы, внутренности античитов, архитектура ESP/аимбота
- **3,985 архивированных проектов** -- полные снимки исходного кода из экосистемы игровой безопасности
- **75 агентов** (7 категорий) -- по играм (CS2, Valorant, Fortnite, Apex...), движкам (UE, Unity, Source, CryEngine...), античитам (EAC, BE, Vanguard, FACEIT...), ядру (драйверы, HV, DMA, EPT), техникам (инъекции, хуки, обфускация), инструментам (IDA, Ghidra, WinDbg, Frida)
- **161 субагент** (16 категорий) -- поиск офсетов, анализ кода, паттерны, диффы бинарников, grep по 3985 архивам, планирование хуков, восстановление структур, аудит драйверов, стелс, рендеринг, сеть и ещё 145
- **114 плагинов** (11 категорий) -- базы офсетов по 10+ играм, справочники SDK, каталог уязвимых драйверов, детект-базы по каждому античиту, генераторы кода, анализаторы бинарников, крипто, рендеринг
- **148 промптов** (14 категорий) -- байпасс каждого античита, билд ESP/аимбота/триггера, реверс Unity/UE/Source игр, написание драйверов/инжекторов/оверлеев, эксплуатация, HWID спуф, миграция, оптимизация, дизайн
- **16 MCP-инструментов** -- воркфлоу-тулы, скиллы, компоненты

## Установка

```bash
npm install
npm run build
```

Добавьте в настройки MCP-клиента:

```json
{
  "mcpServers": {
    "gamehacking": {
      "command": "node",
      "args": ["/path/to/mcp-gamehacking/dist/index.js"]
    }
  }
}
```

## Категории скиллов

- **Ядро / Драйверы**: CR3, SSDT, уязвимые драйверы, BYOVD
- **Инъекции**: рефлективная DLL, manual map, APC, thread hijack
- **Античиты**: Vanguard, BattlEye, EAC, PatchGuard, HVCI
- **Игровые движки**: Unreal, Source, Unity -- офсеты, нетвары, w2s
- **Обфускация**: VMProtect, Themida, OLLVM -- распаковка и деобфускация
- **UEFI / EFI**: буткиты, EFI-маперы, спуф SecureBoot
- **DMA / FPGA**: прямой доступ к памяти, IOMMU
- **60+ игр**: CS2, Valorant, Fortnite, Apex, PUBG, Rust, R6, EFT и др.

## Лицензия

Проект агрегирует публично доступные исследовательские материалы и open-source проекты в образовательных целях и для исследований безопасности.