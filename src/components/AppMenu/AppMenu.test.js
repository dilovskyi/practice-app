import AppMenu from "./";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "../../i18n.forTest";

const setup = (
  onClickItemHandler,
  currentMenuItem = "compare",
  setPageTypeHandler
) => {
  return act(() => {
    render(
      <Router>
        <AppMenu
          onClickItemHandler={onClickItemHandler}
          currentMenuItem={currentMenuItem}
          setPageTypeHandler={setPageTypeHandler}
        />
      </Router>
    );
  });
};

describe("<AppMenu/>", () => {
  it("count of items", async () => {
    setup();

    let navButtons = await screen.findAllByRole("menuitem");
    await waitFor(() => {
      expect(navButtons).toHaveLength(5);
    });
  });

  // FIXME: endless cycle
  // it("items handlers", async () => {
  //   const mockOnClickItemHandler = jest.fn();
  //   const mockCurrentMenuItem = jest.fn();

  //   await waitFor(() => {
  //     setup(mockOnClickItemHandler, mockCurrentMenuItem);
  //     let navButtons = screen.queryByText(/generate/i);
  //     userEvent(navButtons).click();
  //     expect(mockOnClickItemHandler).toHaveBeenCalled();
  //     expect(mockCurrentMenuItem).toHaveBeenCalled();
  //   });
  // });
});
