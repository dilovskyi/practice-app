import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SomeProblems } from "./";

describe("<SomeProblems/>", () => {
  it("renders correnctly", () => {
    render(<SomeProblems t={(key) => key} />);
    expect(screen).toMatchSnapshot();
  });
});
