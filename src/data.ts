import {
  ChannelContribution,
  ExecutiveSignal,
  ExperimentLift,
  JourneyStage,
  StoryPanel,
  WorkflowAlert
} from "./types";

// Hand-authored synthetic fixture. No values are derived from customer data or a statistical estimator.
export const channelContribution: ChannelContribution[] = [
  { channel: "Paid Search", sourced: 1.2, assisted: 2.9, efficiency: 63 },
  { channel: "Organic Search", sourced: 0.9, assisted: 3.5, efficiency: 78 },
  { channel: "Partner", sourced: 2.1, assisted: 2.4, efficiency: 71 },
  { channel: "Lifecycle Email", sourced: 0.5, assisted: 1.6, efficiency: 84 },
  { channel: "Executive Events", sourced: 1.0, assisted: 2.7, efficiency: 67 }
];

const sourcedPipeline = channelContribution.reduce((sum, item) => sum + item.sourced, 0);
const assistedPipeline = channelContribution.reduce((sum, item) => sum + item.assisted, 0);
const organic = channelContribution.find((item) => item.channel === "Organic Search")!;
const partner = channelContribution.find((item) => item.channel === "Partner")!;

export const executiveSignals: ExecutiveSignal[] = [
  { label: "Sourced Pipeline", value: `$${sourcedPipeline.toFixed(1)}M`, delta: "Across five demo channels", tone: "positive" },
  { label: "Organic Assist Share", value: `${Math.round((organic.assisted / assistedPipeline) * 100)}%`, delta: "Share of assisted pipeline", tone: "positive" },
  { label: "Partner-Sourced Pipeline", value: `$${partner.sourced.toFixed(1)}M`, delta: "Synthetic partner scenario", tone: "watch" },
  { label: "Channels Modeled", value: String(channelContribution.length), delta: "Sample data only", tone: "neutral" }
];

export const journeyStages: JourneyStage[] = [
  { stage: "Awareness", firstTouch: 34, wShaped: 24, pipelineShare: 12 },
  { stage: "Evaluation", firstTouch: 22, wShaped: 28, pipelineShare: 19 },
  { stage: "Proof", firstTouch: 16, wShaped: 21, pipelineShare: 26 },
  { stage: "Commercial", firstTouch: 14, wShaped: 15, pipelineShare: 24 },
  { stage: "Expansion", firstTouch: 14, wShaped: 12, pipelineShare: 19 }
];

export const experimentLift: ExperimentLift[] = [
  { experiment: "Guided pricing CTA", region: "North America", lift: 18, decision: "Review for scale" },
  { experiment: "Partner handoff form", region: "EMEA", lift: 9, decision: "Investigate routing" },
  { experiment: "Content intent path", region: "Global", lift: 14, decision: "Compare with control" },
  { experiment: "Enterprise social proof", region: "APAC", lift: 5, decision: "Collect more data" }
];

export const workflowAlerts: WorkflowAlert[] = [
  {
    title: "Partner influence is overstated in EMEA board view",
    owner: "Revenue Operations",
    severity: "High",
    detail: "Opportunity split logic is lagging the revised territory model by one reporting cycle."
  },
  {
    title: "Organic search assists exceed current board narrative",
    owner: "Growth Strategy",
    severity: "Medium",
    detail: "SEO influence on qualified pipeline is materially stronger than last-quarter executive assumptions."
  },
  {
    title: "Lifecycle email is efficient but underfunded",
    owner: "Demand Gen",
    severity: "Medium",
    detail: "High conversion quality and low cost per influenced opportunity suggest budget reallocation."
  }
];

export const storyPanels: StoryPanel[] = [
  {
    heading: "Attribution for operators, not vanity dashboards",
    body: "This portfolio demo shows how growth, RevOps, and leadership teams could examine contribution before making investment decisions."
  },
  {
    heading: "Model comparison without executive confusion",
    body: "First-touch, W-shaped, and pipeline-share views are presented side by side so teams can challenge assumptions without losing narrative clarity."
  },
  {
    heading: "Illustrative workflow signals",
    body: "Sample alerts, experiment outcomes, and efficiency views show how operators could connect evidence with routing, planning, and budget action."
  }
];
