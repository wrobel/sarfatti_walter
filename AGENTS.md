# Prototype Instructions

## Approved content corrections (21 October 2026)

Preserve the existing visual design. Home includes (1948-2026); About Me records Walter's death on 21 August 2026 and offers Marlies' July 2026 video. Contact has only Cosimo/Marlies email links and the Florence showroom note, with no old address or form. Galleries must retain every original artwork and working incremental Show More, using local sharp images instead of Wix blurred placeholders.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
