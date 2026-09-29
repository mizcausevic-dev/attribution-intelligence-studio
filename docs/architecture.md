# Attribution Intelligence Studio Architecture

## Service Overview

Attribution Intelligence Studio is a static frontend portfolio demo. It presents synthetic attribution and experiment scenarios as an executive decision surface. It has no backend, live data connection, or production attribution calculation.

## Request Flow

1. Static TypeScript datasets model executive signals, channel contribution, journey-stage comparisons, experiments, and workflow alerts.
2. The React application translates those datasets into narrative cards, decision views, and chart-based summaries.
3. Recharts visualizations make it possible to compare channel influence, attribution model variance, and experiment lift without overwhelming the viewer.

## Interface Map

- `Hero`
  - positions the studio as an executive attribution operating surface
- `Executive signal cards`
  - show sourced pipeline, organic assist share, partner-sourced pipeline, and modeled channel count derived from the sample fixture
- `Channel quality chart`
  - compares exclusive sourced and assisted pipeline categories plus a sample efficiency index
- `Workflow alerts`
  - surfaces the operational issues that should change quarter planning
- `Model comparison chart`
  - contrasts first-touch, W-shaped, and pipeline-share views
- `Experiment outcomes`
  - shows illustrative lift and possible decisions, without statistical evidence
- `Story panels`
  - explain why the workspace exists and how operators should use it

## Design Notes

- Typography uses a more editorial mix to differentiate this repo from the more technical control-plane projects.
- The palette leans warm and analytical so the project feels like a premium revenue-intelligence workspace rather than a standard SaaS dashboard.
- Charts are kept purposeful and narrative-driven rather than stuffed with low-signal detail.

## Future Upgrades

- Filterable time ranges and scenario views
- Drilldowns by funnel stage, territory, and segment
- Shared narrative layers for board, RevOps, and demand-gen audiences
- Real backend API integration for attribution model versioning
