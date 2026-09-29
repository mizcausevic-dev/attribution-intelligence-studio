# Attribution Intelligence Studio

> **React + TypeScript portfolio demo** showing an interface for attribution analysis, experiment interpretation, and growth decisions. All business figures are synthetic.

**Recruiter takeaway:** *"This person can make complex growth data easier for leadership to inspect."*

---

## Project Overview

| Attribute | Detail |
|---|---|
| **Frontend Stack** | React 19 + Vite + TypeScript |
| **Domain** | Attribution modeling, experiment interpretation, growth operations |
| **Audience** | Growth leadership, RevOps, demand gen, executive stakeholders |
| **Signal Areas** | Sourced pipeline · assisted pipeline · experiment lift · channel efficiency |
| **Portfolio Role** | Frontend flagship for revenue and analytics workflow design |
| **Validation** | Vitest + Testing Library |

---

## Executive Summary

Attribution Intelligence Studio is a frontend portfolio demo of a growth decision workspace. It shows how an operator could compare channel contribution, attribution models, and experiment scenarios in one view.

It is designed to show that growth analytics can be productized with the same seriousness as platform tooling.

---

## Business Problem

Attribution reporting often lives in fragmented slide decks, ad-platform exports, and disputed spreadsheets. Teams struggle to reconcile sourced pipeline, assisted influence, and experiment lift into one clear operating view. Leadership needs a system that explains what is working, where confidence is high, and what action should happen next.

---

## Solution

This demo presents a coordinated frontend surface for:

- channel contribution and efficiency analysis
- model comparison across the journey
- experiment lift and rollout guidance
- workflow alerts that change planning
- premium executive-ready visualization

---

## Architecture

```text
Attribution datasets and experiment signals
    |
    v
Static TypeScript data model
    |
    v
React application shell
    |
    +--> executive signal cards
    +--> contribution charts
    +--> model comparison views
    +--> experiment decisioning panels
    +--> narrative workflow alerts
```

### Workspace Flow

1. A visitor sees the synthetic-data notice and executive signal layer.
2. Contribution charts compare exclusive sourced and assisted pipeline categories.
3. Model comparison exposes where first-touch and multi-touch narratives diverge.
4. Experiment panels show illustrative lift and decisions, without a statistical claim.
5. Sample alerts show how attribution interpretation could change planning.

### Demo data and limits

The values in `src/data.ts` are hand-authored fixtures. No customer data, live analytics, API, statistical estimator, or experiment history feeds the page. Sourced pipeline and assisted pipeline are modeled as exclusive categories; the efficiency index is a sample score from 0 to 100. The three model series are synthetic percentage allocations across journey stages. Experiment lift values have no sample sizes or statistical analysis behind them. The figures should not be used for business decisions.

---

## Design artifacts

The files in [`screenshots/`](screenshots/README.md) are initial design concepts from May 2026. They are not current application captures or test evidence. Run the app to inspect the current interface.

---

## Key Design Decisions

| Decision | Rationale |
|---|---|
| **Editorial-executive framing** | Makes the project feel like a board-ready growth workspace, not a chart sandbox |
| **Narrative workflow alerts** | Keeps the interface tied to action instead of passive dashboard viewing |
| **Multiple attribution views** | Shows model tension clearly instead of hiding it behind one arbitrary KPI |
| **Warm analytical palette** | Gives this repo a distinct visual identity within the broader portfolio |
| **Purposeful charting** | Uses charts to support decisions, not to inflate complexity |

---

## What An Engineering Leader Sees Here

- frontend systems design grounded in growth and analytics operations
- ability to translate messy business logic into a credible product surface
- charting choices that support decision quality rather than noise
- portfolio breadth across revenue, operations, governance, and executive tooling

---

## Getting Started

### Prerequisites

- Node.js 24 (recommended), 22.12+ within the 22.x line, or 20.19+ within the 20.x line
- npm

### Setup

```bash
git clone https://github.com/mizcausevic-dev/attribution-intelligence-studio.git
cd attribution-intelligence-studio
npm ci
npm run dev
```

Open:

- `http://localhost:5173`

### Run Tests

```bash
npm test
```

### Build

```bash
npm run build
```

---

## What This Demonstrates

- premium frontend execution for revenue and analytics workflows
- attribution and experiment decisioning translated into product structure
- strong charting and information hierarchy choices
- React + TypeScript implementation with tests and production-minded repo hygiene
- portfolio breadth beyond backend systems alone

---

## Future Enhancements

- scenario filters for segment, region, and funnel stage
- attribution model version switching
- export views for board and planning narratives
- benchmark overlays for efficiency and spend quality
- API-backed experiment history and confidence tracking

## Static hosting

`npm run build` writes `dist/`. Vite uses relative asset paths so the same build can be served from a domain root or a repository subpath. Choose a host and verify the built page at its final URL before calling it deployed. This repo has no deployment workflow or configured production target.

---

## Tech Stack

[![React](https://img.shields.io/badge/React-19-111827?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=111827&color=0F172A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-111827?style=for-the-badge&logo=vite&logoColor=FFD62E&labelColor=111827&color=7C3AED)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-111827?style=for-the-badge&logo=typescript&logoColor=white&labelColor=111827&color=2563EB)](https://www.typescriptlang.org/)
[![Recharts](https://img.shields.io/badge/Recharts-2.x-111827?style=for-the-badge&logo=chartdotjs&logoColor=F97316&labelColor=111827&color=EA580C)](https://recharts.org/)
[![Vitest](https://img.shields.io/badge/Vitest-Tested-111827?style=for-the-badge&logo=vitest&logoColor=white&labelColor=111827&color=A855F7)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-111827?style=for-the-badge&logo=open-source-initiative&logoColor=white&labelColor=111827&color=84CC16)](https://opensource.org/license/mit)

### Portfolio Links

- [LinkedIn](https://www.linkedin.com/in/mirzacausevic)
- [Skills Page](https://mizcausevic.com/skills/)
- [Medium](https://medium.com/@mizcausevic)
- [GitHub](https://github.com/mizcausevic-dev)

---

*Part of [mizcausevic-dev's GitHub portfolio](https://github.com/mizcausevic-dev) — demonstrating growth-systems thinking, analytics product design, and executive-grade attribution storytelling.*
