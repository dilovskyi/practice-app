import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import WithSuspence from "./hoc";
import "antd/dist/antd.css";
import "./i18n";

ReactDOM.render(
  <WithSuspence>
    <App />
  </WithSuspence>,
  document.getElementById("root")
);
