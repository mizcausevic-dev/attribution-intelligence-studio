import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("labels synthetic data before showing the metrics", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /see which channels earn the next growth dollar/i
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("note")).toHaveTextContent(/all figures, alerts, and recommendations are synthetic/i);
    expect(screen.getByRole("link", { name: /view source/i })).toHaveAttribute("href", "https://github.com/mizcausevic-dev/attribution-intelligence-studio");
  });

  it("renders workflow alert content", () => {
    render(<App />);
    expect(screen.getByText(/partner influence is overstated in emea board view/i)).toBeInTheDocument();
  });

  it("offers a text table for every chart", () => {
    render(<App />);
    expect(screen.getByText("View channel data")).toBeInTheDocument();
    expect(screen.getByText("View model comparison data")).toBeInTheDocument();
    expect(screen.getByText("View experiment data and decisions")).toBeInTheDocument();
    expect(screen.getByText(/sourced and assisted pipeline are exclusive categories/i)).toBeInTheDocument();
  });
});
