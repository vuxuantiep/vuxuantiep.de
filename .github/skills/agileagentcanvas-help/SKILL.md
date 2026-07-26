---
name: help
description: 'Smart skill router for Agile Agent Canvas — describe your task and get matched to the best skills/agents. This is the single entry point to the full BMAD methodology.'
---
<!-- aac-version: 0.5.7 -->

# Agile Agent Canvas — Help & Skill Router

You have access to the **full Agile Agent Canvas** skill catalogue (51 skills and agents). When a user asks for help or describes a task, use this catalogue to identify the best matching skill(s) and then load and execute them.

## How to Use

1. **Match** — Given a user request, scan the catalogue below and identify the top 1–3 most relevant skills by matching the user's intent to skill descriptions.
2. **Present** — Show the user a brief numbered list of matches with a one-sentence reason why each fits.
3. **Load & Execute** — When the user selects a skill (or if there's only one strong match), READ the full contents of the skill file at the path shown in the catalogue, resolve template variables, and follow the skill's instructions completely.
4. **If unsure** — Ask the user a clarifying question, then re-match.

## Variable Resolution

In all BMAD skill files, template variables resolve as follows:

| Variable | Resolves To |
|----------|-------------|
| `{bmad-path}` | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac` |
| `{project-root}` | The workspace/project root directory |
| `{skill-root}` | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills` |

## Schema Files

BMAD JSON schemas for artifact validation are located at: `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/schemas`

## Quick Categories

| Category | Best Skills |
|----------|-------------|
| **Planning & requirements** | aac-product-brief, aac-create-prd, aac-create-epics-and-stories |
| **Development** | bmad-dev-story, bmad-quick-dev, bmad-code-review |
| **Testing & quality** | aac-agent-tea, aac-tea-ci, aac-tea-test-design |
| **Architecture** | aac-create-architecture, aac-generate-project-context |
| **UX & design** | aac-create-ux-design, aac-cis-design-thinking |
| **Creativity & innovation** | aac-cis-innovation-strategy, aac-cis-problem-solving, aac-cis-storytelling |
| **Sprint & project management** | aac-sprint-planning, aac-sprint-status, aac-retrospective |
| **Documentation** | aac-document-project, aac-generate-readme, aac-generate-api-docs |
| **Conversion** | aac-to-json, aac-agent-canvas-integrator |

## Full Skill Catalogue

| # | Name | Type | Description | File |
|---|------|------|-------------|------|
| 1 | aac-agent-canvas-integrator | agent | Agile Canvas Integrator â€” converts BMAD markdown artifacts to schema-compliant JSON for Agile Agent Canvas visualizati | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-agent-canvas-integrator/SKILL.md` |
| 2 | aac-agent-tea | agent | Master Test Architect and Quality Advisor | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-agent-tea/SKILL.md` |
| 3 | aac-bmb-agent | agent | BMB agent builder workflows | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-bmb-agent/SKILL.md` |
| 4 | aac-bmb-agent-builder | agent | Agent Building Expert (BMB module) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-bmb-agent-builder/SKILL.md` |
| 5 | aac-bmb-agent-module-builder | agent | Module Creation Master (BMB module) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-bmb-agent-module-builder/SKILL.md` |
| 6 | aac-bmb-agent-workflow-builder | agent | Workflow Building Master (BMB module) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-bmb-agent-workflow-builder/SKILL.md` |
| 7 | aac-bmb-module | workflow | BMB module builder workflows | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-bmb-module/SKILL.md` |
| 8 | aac-bmb-workflow | workflow | BMB workflow builder workflows | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-bmb-workflow/SKILL.md` |
| 9 | aac-cis-agent-brainstorming | agent | Elite Brainstorming Specialist (CIS module) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-brainstorming/SKILL.md` |
| 10 | aac-cis-agent-design-thinking | agent | Design Thinking Maestro (CIS module) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-design-thinking/SKILL.md` |
| 11 | aac-cis-agent-innovation | agent | Disruptive Innovation Oracle (CIS module) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-innovation/SKILL.md` |
| 12 | aac-cis-agent-presentation | agent | Visual Communication Expert (CIS module) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-presentation/SKILL.md` |
| 13 | aac-cis-agent-problem-solver | agent | Master Problem Solver (CIS module) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-problem-solver/SKILL.md` |
| 14 | aac-cis-agent-storyteller | agent | Master Storyteller (CIS module) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-storyteller/SKILL.md` |
| 15 | aac-cis-design-thinking | workflow | Guide human-centered design processes using empathy-driven methodologies | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-design-thinking/SKILL.md` |
| 16 | aac-cis-innovation-strategy | workflow | Identify disruption opportunities and architect business model innovation | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-innovation-strategy/SKILL.md` |
| 17 | aac-cis-problem-solving | workflow | Apply systematic problem-solving methodologies to complex challenges | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-problem-solving/SKILL.md` |
| 18 | aac-cis-storytelling | workflow | Craft compelling narratives using story frameworks | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-storytelling/SKILL.md` |
| 19 | aac-generate-api-docs | workflow | Generate API documentation from source code analysis | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-generate-api-docs/SKILL.md` |
| 20 | aac-generate-changelog | workflow | Generate changelog or release notes from git history and project changes | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-generate-changelog/SKILL.md` |
| 21 | aac-generate-readme | workflow | Generate or update a comprehensive README.md from project analysis | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-generate-readme/SKILL.md` |
| 22 | aac-review-api-design | workflow | Review workflow: API Design Review Workflow | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-review-api-design/SKILL.md` |
| 23 | aac-review-ceo-scope-review | workflow | Challenge scope ambition and recommend expansion, holding, or reduction | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-review-ceo-scope-review/SKILL.md` |
| 24 | aac-review-coding-standards | workflow | Review workflow: Coding Standards Workflow | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-review-coding-standards/SKILL.md` |
| 25 | aac-review-design-dimension-audit | workflow | Audit UX design against strict dimensions on a 0-10 scale | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-review-design-dimension-audit/SKILL.md` |
| 26 | aac-review-e2e-testing | workflow | Review workflow: E2E Testing Workflow | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-review-e2e-testing/SKILL.md` |
| 27 | aac-review-eng-execution-review | workflow | Lock down execution architecture, data flows, and edge cases | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-review-eng-execution-review/SKILL.md` |
| 28 | aac-review-eval-harness | workflow | Review workflow: Eval Harness Workflow | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-review-eval-harness/SKILL.md` |
| 29 | aac-review-security-audit | workflow | Perform STRIDE and OWASP Top 10 security assessment | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-review-security-audit/SKILL.md` |
| 30 | aac-review-verification-loop | workflow | Review workflow: Verification Loop Workflow | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-review-verification-loop/SKILL.md` |
| 31 | aac-tea-atdd | workflow | Generate failing acceptance tests using TDD cycle | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-tea-atdd/SKILL.md` |
| 32 | aac-tea-automate | workflow | Expand test automation coverage for codebase | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-tea-automate/SKILL.md` |
| 33 | aac-tea-ci | workflow | Scaffold CI/CD quality pipeline with test execution | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-tea-ci/SKILL.md` |
| 34 | aac-tea-framework | workflow | Initialize test framework with Playwright or Cypress | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-tea-framework/SKILL.md` |
| 35 | aac-tea-nfr-assess | workflow | Assess NFRs like performance security and reliability | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-tea-nfr-assess/SKILL.md` |
| 36 | aac-tea-teach-me-testing | workflow | TEA workflow: teach-me-testing | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-tea-teach-me-testing/SKILL.md` |
| 37 | aac-tea-test-design | workflow | Create system-level or epic-level test plans | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-tea-test-design/SKILL.md` |
| 38 | aac-tea-test-review | workflow | Review test quality using best practices validation | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-tea-test-review/SKILL.md` |
| 39 | aac-tea-trace | workflow | Generate traceability matrix and quality gate decision | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-tea-trace/SKILL.md` |
| 40 | aac-cis-agent-brainstorming | agent | Elite Brainstorming Specialist (CIS v0.1.9) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-brainstorming/SKILL.md` |
| 41 | aac-cis-agent-problem-solver | agent | Master Problem Solver (CIS v0.1.9) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-problem-solver/SKILL.md` |
| 42 | aac-cis-agent-design-thinking | agent | Design Thinking Maestro (CIS v0.1.9) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-design-thinking/SKILL.md` |
| 43 | aac-cis-agent-innovation | agent | Disruptive Innovation Oracle (CIS v0.1.9) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-innovation/SKILL.md` |
| 44 | aac-cis-agent-presentation | agent | Visual Communication Expert (CIS v0.1.9) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-presentation/SKILL.md` |
| 45 | aac-cis-agent-storyteller | agent | Master Storyteller (CIS v0.1.9) | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-cis-agent-storyteller/SKILL.md` |
| 46 | aac-generate-project-context | workflow | Create project-context.md with AI rules | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-generate-project-context/SKILL.md` |
| 47 | aac-sprint-planning | workflow | Generate sprint status tracking from epics | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-sprint-planning/SKILL.md` |
| 48 | aac-sprint-status | workflow | Summarize sprint status and surface risks | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-sprint-status/SKILL.md` |
| 49 | aac-retrospective | workflow | Post-epic review to extract lessons and assess success | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-retrospective/SKILL.md` |
| 50 | aac-to-json | workflow | Convert markdown artifacts to structured JSON format | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-to-json/SKILL.md` |
| 51 | aac-product-brief | workflow | Create or update product briefs through guided or autonomous discovery | `c:/Users/vuxua/.vscode/extensions/msayedshokry.agileagentcanvas-0.5.7/resources/_aac/skills/aac-product-brief/SKILL.md` |

## Agent Personas

When the user asks to "talk to" a persona by name, match to the corresponding agent skill:

| Persona | Name | Skill |
|---------|------|-------|
| Master | BMad Master | aac-agent-analyst |
| Analyst | Mary | aac-agent-analyst |
| PM | John | aac-agent-pm |
| Architect | Winston | aac-agent-architect |
| Dev | Amelia | aac-agent-dev |
| QA | Quinn | aac-agent-tea |
| Scrum Master | Bob | aac-agent-pm |
| UX Designer | Sally | aac-agent-ux-designer |
| Tech Writer | Paige | aac-agent-tech-writer |
| Test Architect | Murat | aac-agent-tea |
| Solo Dev | Barry | aac-agent-dev |
| Agent Builder | Bond | aac-bmb-agent-builder |
| Module Builder | Morgan | aac-bmb-agent-module-builder |
| Workflow Builder | Wendy | aac-bmb-agent-workflow-builder |
| Brainstorming | Carson | aac-cis-agent-brainstorming |
| Design Thinking | Maya | aac-cis-agent-design-thinking |
| Innovation | Victor | aac-cis-agent-innovation |
| Problem Solver | Dr. Quinn | aac-cis-agent-problem-solver |
| Storyteller | Sophia | aac-cis-agent-storyteller |
| Presentation | Caravaggio | aac-cis-agent-presentation |

## Fallback

If no skill matches the user's request, suggest they:
- Rephrase their task and try again
- Browse the categories table above for inspiration
- Ask for a specific persona by name
