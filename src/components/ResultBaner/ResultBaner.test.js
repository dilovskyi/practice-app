import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultBaner from "./ResultBaner";

describe("<ResultBaner/>", () => {
  it("is title in baner", () => {
    render(<ResultBaner t={(key) => key} />);
    const titleString = screen.getByText(/resultBaner.title/i);
    expect(titleString).toBeInTheDocument();
  });

  describe("result prop", () => {
    it("is Array", () => {
      render(<ResultBaner t={(key) => key} result={[1, 2, 3]} />);
      const resultText = screen.getByText("1, 2, 3");
      expect(resultText).toBeInTheDocument();
    });

    it("is Boolean", () => {
      render(<ResultBaner t={(key) => key} result={true} />);
      const resultText = screen.getByText("true");
      expect(resultText).toBeInTheDocument();
    });
  });
});
