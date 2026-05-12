# Changelog

All notable changes to this project are documented here.

## [1.0.0] - 2026-05-12

### Released
- Released **attribution-intelligence-studio** publicly as a reviewable operating system for event-driven revenue systems.
- Packaged the current implementation, documentation, validation flow, and proof surfaces into a repo that can be reviewed by technical and operating stakeholders.
- Clarified the core problem the project is addressing: event-order ambiguity, idempotency drift, and weak business explainability in revenue-critical flows.

### Why this mattered
- Existing approaches in stream processors, billing platforms, dashboards, and generic messaging infrastructure were useful for parts of the workflow.
- They still left out an operating model that made event trust, replay confidence, and monetization signals easy to review.
- This release made the repo read like an operational capability rather than a narrow technical demo.

## [0.1.0] - 2026-02-10

### Shipped
- Cut the first coherent internal version of **attribution-intelligence-studio** with stable domain objects, review surfaces, and decision outputs.
- Established the first reviewable version of the architecture described as: React + TypeScript studio for multi-touch attribution analysis, experiment interpretation, and executive growth decisioning.
- Focused the repo around actionability instead of passive reporting.

## [Prototype] - 2025-04-14

### Built
- Built the first runnable prototype for the repo's main workflow and decision model.
- Validated the concept against pressure points such as dual-write failure, idempotency drift, lagging attribution, and fraud-signal fragmentation.
- Used the prototype phase to test whether the project could drive action, not just present information.

## [Design Phase] - 2024-12-16

### Designed
- Defined the system around operator-first and decision-legible outputs.
- Chose interfaces and examples that made sense for fintech, RevOps, monetization, and platform data teams.
- Avoided reducing the project to a generic dashboard, CRUD app, or fashionable wrapper around the stack.

## [Idea Origin] - 2024-02-16

### Observed
- The original idea surfaced while looking at how teams were handling event-order ambiguity, idempotency drift, and weak business explainability in revenue-critical flows.
- The recurring pattern was that teams had data and tools, but still lacked a usable operating layer for the hardest decisions.

## [Background Signals] - 2022-08-09

### Context
- Earlier platform, governance, and operator-tooling work made one pattern hard to ignore: the systems that create the most drag are often the ones with partial controls and weak operational coherence, not the ones with no controls at all.
- That pattern shaped the thinking behind this repo well before the public version existed.