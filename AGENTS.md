# Prototype Instructions

## Approved content corrections (21 October 2026)

About Me's chronological biography uses two aligned columns: dates on the left, descriptions on the right, including wrapped lines on narrow screens.

Remove the nonfunctional social symbols. Do not restore them without verified profile URLs approved by Marlies.

On mobile (up to 700px), use a discreet Menu toggle showing the current page and vertically expanding links, closing on selection or Escape. Do not use horizontally scrolling navigation. Preserve the existing horizontal desktop navigation and understated typography.

Preserve the existing visual design. The shared header includes (1948-2026) on every page, not just Home; About Me records Walter's death on 21 August 2026 and offers Marlies' July 2026 video. Contact has only Cosimo/Marlies email links and the Florence showroom note, with no old address or form. Galleries must retain every original artwork and working incremental Show More, using local sharp images instead of Wix blurred placeholders.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
