import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ModalDataEntry } from "./";
import "../../matchMedia.mock";
import "../../i18n.forTest";

const handlerParamsMock = [
  {
    id: "arrayLength",
    pos: 0,
  },
  {
    id: "initValue",
    pos: 1,
  },
  {
    id: "diff",
    pos: 2,
  },
];

describe("<ModalDataEntry/>", () => {
  let rerenderComponent;
  beforeEach(() => {
    const { getByText, rerender } = render(<ModalDataEntry />);
    rerenderComponent = rerender;
    let openButton = getByText("buttonsText.modal.open");
    userEvent.click(openButton);
  });

  describe("view tests", () => {
    it("modal is start button", () => {
      expect(screen.getByText("buttonsText.modal.start")).toBeInTheDocument();
    });
    it("modal is cencel button", () => {
      expect(screen.getByText("buttonsText.modal.cencel")).toBeInTheDocument();
    });

    it("has title", () => {
      expect(screen.getByText("No data")).toBeInTheDocument();
      rerenderComponent(<ModalDataEntry description={"Any title"} />);
      expect(screen.getByText("Any title")).toBeInTheDocument();
    });

    it("has label and input", () => {
      expect(screen.queryAllByAltText(/taskParamName/i)).toHaveLength(0);
      rerenderComponent(<ModalDataEntry handlerParams={handlerParamsMock} />);
      expect(screen.queryAllByText(/taskParamName/i)).toHaveLength(3);
      expect(screen.queryAllByRole("input")).toHaveLength(3);
    });

    it("close (x) button is visible", () => {
      expect(screen.queryAllByRole("img")).toHaveLength(2);
    });
  });

  describe("event test", () => {
    it("on Start button click", () => {
      const startButton = screen.getByText("buttonsText.modal.start");

      userEvent.click(startButton);
      expect(screen.getByText("No result")).toBeInTheDocument();

      const mockFn = jest.fn();
      rerenderComponent(<ModalDataEntry handlerFunction={mockFn} />);

      mockFn.mockReturnValue("1,2,3");
      userEvent.click(startButton);
      expect(screen.getByText("1,2,3")).toBeInTheDocument();

      mockFn.mockReturnValue(true);
      userEvent.click(startButton);
      expect(screen.getByText("true")).toBeInTheDocument();

      mockFn.mockReturnValue([3, 2, 1]);
      userEvent.click(startButton);
      expect(screen.getByText("3, 2, 1")).toBeInTheDocument();
    });

    it("on Cencel button click", () => {
      const cencelButton = screen.getByText("buttonsText.modal.cencel");
      userEvent.click(cencelButton);
      expect(
        screen.queryByRole(document.documentElement, "dialog")
      ).not.toBeInTheDocument();
    });

    describe("on input change", () => {
      beforeEach(() => {
        rerenderComponent(<ModalDataEntry handlerParams={handlerParamsMock} />);
      });
      it("invalie value", async () => {
        const inputs = await screen.findAllByRole("input");

        expect(screen.queryByRole("alert")).toBe(null);

        userEvent.type(inputs[0], "qwwwww");
        expect(screen.getByRole("alert")).toBeInTheDocument();
      });
      it("correct value", async () => {
        const inputs = await screen.findAllByRole("input");

        expect(screen.queryByRole("alert")).toBe(null);

        userEvent.type(inputs[0], "1,2,3,4");
        expect(screen.queryByRole("alert")).toBe(null);
      });
    });
  });
});
