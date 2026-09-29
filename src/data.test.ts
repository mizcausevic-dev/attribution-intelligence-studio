import { channelContribution, executiveSignals, journeyStages } from "./data";

describe("synthetic data contracts", () => {
  it("keeps the headline sourced pipeline reconciled to channel data", () => {
    const total = channelContribution.reduce((sum, channel) => sum + channel.sourced, 0);
    expect(executiveSignals.find((signal) => signal.label === "Sourced Pipeline")?.value).toBe(`$${total.toFixed(1)}M`);
    expect(channelContribution.every((channel) => channel.sourced >= 0 && channel.assisted >= 0)).toBe(true);
  });

  it("allocates each model's synthetic share across the full journey", () => {
    for (const model of ["firstTouch", "wShaped", "pipelineShare"] as const) {
      expect(journeyStages.reduce((sum, stage) => sum + stage[model], 0)).toBe(100);
    }
  });
});
