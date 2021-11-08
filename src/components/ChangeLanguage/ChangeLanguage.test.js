import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ChangeLanguage } from "./index";

const i18n = {
  language: "en",
  changeLanguage: jest.fn((lang) => lang),
};

describe("<ChangeLanguage/>", () => {
  it("renders correnctly", () => {
    render(<ChangeLanguage t={(key) => key} i18n={i18n} />);
    expect(screen).toMatchSnapshot();
  });
  it("onChange language", () => {
    render(<ChangeLanguage t={(key) => key} i18n={i18n} />);

    userEvent.click(screen.getByText(/buttonsText.changeLang/i));
    userEvent.click(screen.getByText(/buttonsText.changeLang.ru/i));

    expect(i18n.changeLanguage).toBeCalled();
  });
});
