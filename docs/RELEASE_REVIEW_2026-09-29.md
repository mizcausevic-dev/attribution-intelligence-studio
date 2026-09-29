# Release review: 2026-09-29

## Goal

Review the public portfolio demo before any deployment, correct verified defects, and leave a reproducible handoff.

## Current state

- Base: fetched `origin/main` at `d8f8fde`; review branch: `review/attribution-release-2026-09-29`.
- The older `project/attribution-intelligence-studio` checkout was left untouched. Its 26 modified tracked files differ only by line endings from that branch's HEAD.
- The product is a static React/Vite page with hand-authored TypeScript fixtures. It has no configured deployment target or live data connection.

## Scope and acceptance criteria

- Correct visible chart and data-model defects; distinguish synthetic examples from measured outcomes.
- Give chart values an accessible text path and keep the page usable at phone, tablet, and desktop widths.
- Align public docs and concept assets with observable repository history.
- Verify install, tests, build, dependency advisories, source diff, and a built-page browser smoke check.
- Do not deploy, publish, merge, or modify the older checkout.

## Risks and release class

R2, public static portfolio surface. Main risks are misleading business claims, unreadable chart data, dependency advisories, broken static asset paths, and host-specific controls that cannot be tested without a target. There is no observed customer-data processing in the app source.

## Design and execution

1. Use a separate worktree from the current default branch.
2. Add a visible synthetic-data notice and derive headline cards from the chart fixture.
3. Render the missing model series with `ComposedChart`; supply expandable semantic tables for all charts.
4. Use relative Vite asset paths and clarify historical design concepts in the README.
5. Replace unsupported origin/changelog narratives with Git-observable history; remove the static validation mock.
6. Update vulnerable development dependencies within the Node 20-compatible line and limit CI permissions.

## Verification evidence

- `npm.cmd ci --cache C:\Users\chaus\Documents\Codex\repos\.review-npm-cache --no-audit --no-fund`: exit 0 after the local Vite process released `esbuild.exe`.
- `npm.cmd test`: exit 0, 2 files and 5 tests passed.
- `npm.cmd run build`: exit 0 after changing Vite config's `defineConfig` import for Vitest 4. Final output: 623.89 kB JavaScript, 176.85 kB gzip; Vite warned about a chunk over 500 kB.
- `npm.cmd audit --audit-level=moderate --cache C:\Users\chaus\Documents\Codex\repos\.review-npm-cache`: exit 0, 0 advisories returned at review time.
- `git diff --check`: exit 0. A high-confidence source-pattern scan for common key formats returned no matches (rg exit 1).
- Built `dist/` preview at `http://127.0.0.1:5184/`: desktop DOM showed the synthetic notice, three chart data tables, all three model legend entries, one rendered model line, and ten channel bars. At 769px the hero measured 469px and metrics began 537px from the document top. At 390px and 320px, document scroll width did not exceed viewport width; charts scroll inside their panels. Browser Tab reached both source/contact links and the first table disclosure, whose visible focus outline and Enter activation were observed. The browser reported no console errors in this pass.
- Chart animations were disabled. Automated color-contrast testing, other browsers, real devices, remote CI for this unmerged branch, and deployed headers/links remain unverified.

## Deployment and rollback

**BLOCKED for deployment.** No production host, URL, upload path, security-header boundary, or rollback artifact has been specified or tested. This review did not deploy. After selecting a host, run `npm.cmd ci`, `npm.cmd test`, and `npm.cmd run build` on the reviewed commit; serve the contents of `dist/` at the intended path; then verify the public URL, assets, links, headers, and a rollback to the previous artifact before release. Revert the review commit or redeploy the previous artifact if the hosted checks fail.

## Progress, decisions, and outcome

- 2026-09-29: Source review, independent security/privacy, product/accessibility, and architecture reviews completed.
- 2026-09-29: Local defects corrected and the affected checks rerun. The original line-ending-only checkout was preserved.
- Decision: keep the page explicitly a synthetic portfolio demo; do not imply validated attribution or experiment statistics.
- Outcome: local code gates pass; deployment remains blocked on target-specific verification and remote CI for the unmerged changes.

## Release continuation: 2026-09-29

Miz authorized the next release step after the initial review. GitHub Pages was selected for this public, static, repository-backed portfolio demo. It needs no application runtime, customer-data store, or new paid service. The repository did not have a Pages site when checked; the expected project URL returned GitHub Pages 404. A `main`-only workflow now tests, builds, uploads `dist/`, and deploys with separate minimal job permissions. The earlier no-deploy scope and blocked outcome above describe the first review phase, not this continuation.

Release sequence: push this review branch, open a PR, wait for both Node versions in remote CI and CodeQL, configure Pages for GitHub Actions, merge only after checks pass, confirm the deployment workflow and public URL, and record the live smoke and rollback evidence here. Before the first successful Pages deployment, there is no previous Pages artifact to restore. Its fallback is to unpublish the site or revert the release commit and deploy a corrected build. Later releases can re-run a prior successful deployment workflow run, which uses its original commit SHA.
