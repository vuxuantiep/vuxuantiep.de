---
description: Location of BMAD JSON schemas for artifact validation
---

# BMAD Schema Files

The BMAD JSON schemas used by the Agile Agent Canvas extension are located at:

```
c:\Users\vuxua\.vscode\extensions\msayedshokry.agileagentcanvas-0.5.7\resources\_aac\schemas
```

## Directory structure

- `bmm/` — Business Management Module schemas (story, epics, prd, architecture, etc.)
- `tea/` — Test Engineering & Automation schemas (test-design, test-strategy, etc.)
- `cis/` — Creative & Innovation Suite schemas
- `common/` — Shared schemas (risks, requirements, etc.)

## Usage

When you need to validate or understand the structure of a BMAD artifact (e.g. a story, epic, PRD),
read the corresponding schema file from the path above. For example:

- Story schema: `c:\Users\vuxua\.vscode\extensions\msayedshokry.agileagentcanvas-0.5.7\resources\_aac\schemas\bmm\story.schema.json`
- Epics schema: `c:\Users\vuxua\.vscode\extensions\msayedshokry.agileagentcanvas-0.5.7\resources\_aac\schemas\bmm\epics.schema.json`
- PRD schema: `c:\Users\vuxua\.vscode\extensions\msayedshokry.agileagentcanvas-0.5.7\resources\_aac\schemas\bmm\prd.schema.json`
