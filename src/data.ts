import {
  ChannelContribution,
  ExecutiveSignal,
  ExperimentLift,
  JourneyStage,
  StoryPanel,
  WorkflowAlert
} from "./types";

export const executiveSignals: ExecutiveSignal[] = [
  { label: "Attributed Pipeline", value: "$8.4M", delta: "+14% QoQ", tone: "positive" },
  { label: "Organic Influence Share", value: "31%", delta: "+5 pts", tone: "positive" },
  { label: "Partner-Sourced Revenue", value: "$2.1M", delta: "SLA drift in EMEA", tone: "watch" },
  { label: "Decision Confidence", value: "92", delta: "Model stable", tone: "neutral" }
];

export const channelContribution: ChannelContribution[] = [
  { channel: "Paid Search", sourced: 1.2, influenced: 2.9, efficiency: 63 },
  { channel: "Organic Search", sourced: 0.9, influenced: 3.5, efficiency: 78 },
  { channel: "Partner", sourced: 2.1, influenced: 2.4, efficiency: 71 },
  { channel: "Lifecycle Email", sourced: 0.5, influenced: 1.6, efficiency: 84 },
  { channel: "Executive Events", sourced: 1.0, influenced: 2.7, efficiency: 67 }
];

export const journeyStages: JourneyStage[] = [
  { stage: "Awareness", firstTouch: 34, wShaped: 24, pipelineShare: 12 },
  { stage: "Evaluation", firstTouch: 22, wShaped: 28, pipelineShare: 19 },
  { stage: "Proof", firstTouch: 16, wShaped: 21, pipelineShare: 26 },
  { stage: "Commercial", firstTouch: 14, wShaped: 15, pipelineShare: 24 },
  { stage: "Expansion", firstTouch: 14, wShaped: 12, pipelineShare: 19 }
];

export const experimentLift: ExperimentLift[] = [
  { experiment: "Guided pricing CTA", region: "North America", lift: 18, confidence: 95, decision: "Scale this sprint" },
  { experiment: "Partner handoff form", region: "EMEA", lift: 9, confidence: 83, decision: "Tune routing logic" },
  { experiment: "Content intent path", region: "Global", lift: 14, confidence: 91, decision: "Promote to control" },
  { experiment: "Enterprise social proof", region: "APAC", lift: 5, confidence: 68, decision: "Needs more data" }
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
    body: "This studio is designed to help growth, RevOps, and leadership teams decide where revenue really comes from and which channels deserve more investment."
  },
  {
    heading: "Model comparison without executive confusion",
    body: "First-touch, W-shaped, and pipeline-share views are presented side by side so teams can challenge assumptions without losing narrative clarity."
  },
  {
    heading: "Workflow proof, not marketing theater",
    body: "Alerts, experiment outcomes, and efficiency views are surfaced like operating signals that can trigger routing, planning, and budget action."
  }
];
