import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WithSuspence from "../../hoc";
import TasksPage from "./";

describe("<CollapseList/>", () => {
  it("get type from location correctry", () => {
    render(
      <WithSuspence>
        <TasksPage location={"/compare"} />
      </WithSuspence>
    );
    expect(screen).toMatchSnapshot();
  });
});
