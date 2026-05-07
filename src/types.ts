export type ExecutiveSignal = {
  label: string;
  value: string;
  delta: string;
  tone: "positive" | "watch" | "neutral";
};

export type ChannelContribution = {
  channel: string;
  sourced: number;
  influenced: number;
  efficiency: number;
};

export type JourneyStage = {
  stage: string;
  firstTouch: number;
  wShaped: number;
  pipelineShare: number;
};

export type ExperimentLift = {
  experiment: string;
  region: string;
  lift: number;
  confidence: number;
  decision: string;
};

export type WorkflowAlert = {
  title: string;
  owner: string;
  severity: string;
  detail: string;
};

export type StoryPanel = {
  heading: string;
  body: string;
};
