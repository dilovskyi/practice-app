import "../../matchMedia.mock";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ParamForm } from "./";

const handlerParams = [
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

const setup = () => {
  const utils = render(
    <ParamForm
      t={(t) => t}
      inputOnChangeHandler={() => null}
      handlerParams={handlerParams}
    />
  );
  const input = utils.queryAllByRole("input")[0];
  return {
    input,
    ...utils,
  };
};

describe("<ParamForm/>", () => {
  it("inputs rendering", async () => {
    const { queryAllByLabelText } = setup();

    await waitFor(() => expect(queryAllByLabelText(/taskParamName/i)));
  });

  it("on change handler", async () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
});
