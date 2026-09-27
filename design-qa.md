# Design QA

- Source visual truth: `https://vriessarfa.wixsite.com/mysite` and its six linked routes, captured in the Codex in-app browser on desktop and at a 390 × 844 mobile viewport.
- Implementation: local Vite build at `http://localhost:4180/`.
- Source dimensions: fixed 980 CSS px Wix canvas on desktop; mobile source retained a 980 px internal canvas and browser-scaled it into the viewport.
- Implementation target: responsive 980 px maximum canvas with a single-column layout below 700 px.
- State: home, recent works, botanical and landscapes, about, exhibitions, surroundings, contact, and gallery lightbox.

## Full-view comparison evidence

The source was visually captured for all seven routes. The implementation could not be reached from the in-app browser: its `localhost` network is isolated from the local Vite server, and `terminal.local` is unavailable in this Codex Desktop session. Build output and HTTP serving were verified locally, but browser-rendered comparison evidence is therefore unavailable.

## Focused-region comparison evidence

Not available for the same browser-network isolation reason.

## Findings

- [P1] Browser-rendered visual comparison is unavailable.
  - Evidence: the Vite production build and packaging tests pass, but the approved in-app browser cannot resolve or reach the local preview.
  - Impact: exact typography, crop, and spacing parity cannot be signed off from browser evidence.
  - Fix: open the retained local preview from the desktop app or verify after pushing to GitHub Pages, then compare home, gallery, text pages, and mobile views against the captured source.

## Implementation checklist

- [x] All public routes and source text reproduced.
- [x] Original artwork and photography stored locally.
- [x] Wix tracking, banner, and scripts omitted.
- [x] Gallery lightbox and responsive navigation implemented.
- [x] Contact form left intentionally non-functional.
- [x] Production build and hosting tests pass.
- [ ] Perform browser-rendered visual comparison once the preview is reachable.

## Comparison history

No visual fix iterations were possible because the implementation preview was unreachable from the approved browser surface.

final result: blocked
