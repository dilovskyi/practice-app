import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "antd/dist/antd.css";
import "./i18n";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
