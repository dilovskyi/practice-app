import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CollapseList from "./";
import WithSuspence from "../../hoc/WithSuspense";
import * as helpers from "../../helpers/getTasksByType";
import { mockDataTasks, mockPageType, mockPageData } from "./mockTasksData";
import { TaskDataContext } from "../App";
import "../../i18n.forTest";

function renderCollapseList(type) {
  return render(
    <WithSuspence>
      <TaskDataContext.Provider value={mockDataTasks}>
        <CollapseList type={type} />
      </TaskDataContext.Provider>
    </WithSuspence>
  );
}

describe("<CollabseList/>", () => {
  it("type not specified", () => {
    const { getByText } = renderCollapseList(null);
    expect(getByText(/No data/i)).toBeInTheDocument();
  });

  it("type is incorrect", () => {
    const { getByText } = renderCollapseList("Any");
    expect(getByText(/No data/i)).toBeInTheDocument();
  });

  it("get pageData if type is corect", () => {
    const spy = jest.spyOn(helpers, "getTasksByType");
    const pageTasks = helpers.getTasksByType(mockDataTasks, mockPageType);
    renderCollapseList(mockPageType);
    expect(spy).toHaveBeenCalled();
    expect(pageTasks).toEqual(mockPageData);
    jest.restoreAllMocks();
  });

  it("collapse by click", () => {
    const taskName = "divisibleByFirstElementOrLastWhitchMore";
    const { getByText } = renderCollapseList(mockPageType);
    userEvent.click(screen.getByText(taskName));
    expect(getByText(taskName)).toBeInTheDocument();
    expect(getByText("buttonsText.modal.open")).toBeInTheDocument();
  });
});
