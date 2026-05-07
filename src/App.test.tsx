import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the hero heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /executive-grade attribution that translates channel complexity into investment decisions/i
      })
    ).toBeInTheDocument();
  });

  it("renders workflow alert content", () => {
    render(<App />);
    expect(screen.getByText(/partner influence is overstated in emea board view/i)).toBeInTheDocument();
  });
});
