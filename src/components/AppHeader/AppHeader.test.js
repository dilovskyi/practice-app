import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { act } from "react-dom/test-utils";
import { Router } from "react-router-dom";
import AppHeader from "./";
import "../../i18n.forTest";

describe("<App/>", () => {
  //TODO: mock history go back
  // test("go back history navigating", async () => {
  //   const history = createMemoryHistory();
  //   history.push("/");
  //   history.push("/compare");
  //   render(
  //     <Router history={history}>
  //       <AppHeader />
  //     </Router>
  //   );

  //   userEvent.click(screen.getByRole("button"));
  //   expect(history.goBack()).toBeCalled();
  //   screen.debug();
  // });

  test("all items were rendered", async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <AppHeader />
      </Router>
    );

    expect(screen.getByText("homePage.title")).toBeInTheDocument();

    let navButtons = await screen.findAllByRole("menuitem");
    expect(navButtons).toHaveLength(5);
  });

  test("landing on a bad page", () => {
    const history = createMemoryHistory();
    history.push("/");

    render(
      <Router history={history}>
        <AppHeader />
      </Router>
    );

    expect(screen.getByText("homePage.title")).toBeInTheDocument();
    expect(screen.getByText("homePage.subTitle")).toBeInTheDocument();
  });

  it("rendering a title that uses useLocation", () => {
    const history = createMemoryHistory();
    const route = "/compare";
    history.push(route);

    act(() => {
      render(
        <Router history={history}>
          <AppHeader />
        </Router>
      );
    });

    expect(screen.getByText("comparePage.title")).toBeInTheDocument();
    expect(screen.getByText("comparePage.subTitle")).toBeInTheDocument();
  });
});
