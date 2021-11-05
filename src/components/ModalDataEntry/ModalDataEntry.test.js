import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ModalDataEntry } from "./";
import "../../i18n.forTest";

describe("<ModalDataEntry/>", () => {
  it("open modal button", () => {
    render(<ModalDataEntry />);
    const btn = screen.getByText("buttonsText.modal.open");
    expect(btn).toBeInTheDocument();
  });

  describe("test view", () => {
    it("description exist", () => {
      const { rerender } = render(
        <ModalDataEntry description="Here should be task description" />
      );

      userEvent.click(screen.getByText("buttonsText.modal.open"));

      expect(
        screen.getByText("Here should be task description")
      ).toBeInTheDocument();

      rerender(<ModalDataEntry />);
      expect(screen.getByText("No data")).toBeInTheDocument();
    });

    it("start button exist", () => {
      render(<ModalDataEntry />);
      expect(
        screen.queryByText("buttonsText.modal.start")
      ).not.toBeInTheDocument();

      userEvent.click(screen.getByText("buttonsText.modal.open"));
      expect(screen.queryByText("buttonsText.modal.start")).toBeInTheDocument();
    });

    it("cencel button exist", () => {
      render(<ModalDataEntry />);
      expect(
        screen.queryByText("buttonsText.modal.cencel")
      ).not.toBeInTheDocument();

      userEvent.click(screen.getByText("buttonsText.modal.open"));
      expect(
        screen.queryByText("buttonsText.modal.cencel")
      ).toBeInTheDocument();
    });
  });

  describe("test handlers", () => {
    it("On cencel button click", () => {
      // const { queryByText } = setUp();
      const { queryByText } = render(<ModalDataEntry />);
      userEvent.click(screen.getByText("buttonsText.modal.open"));

      userEvent.click(screen.getByText("buttonsText.modal.cencel"));
      expect(queryByText("buttonsText.modal.cencel")).not.toBeInTheDocument();
      expect(queryByText("buttonsText.modal.cencel")).not.toBeInTheDocument();
      expect(queryByText("buttonsText.modal.cencel")).not.toBeInTheDocument();
    });

    it("On start button click (handlerFunction from props)", () => {
      const handleClick = jest.fn();
      render(<ModalDataEntry handlerFunction={handleClick} />);
      userEvent.click(screen.getByText("buttonsText.modal.open"));
      userEvent.click(screen.getByText("buttonsText.modal.start"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
