import { HistoryRouter } from "@finalapp/react-safe-router";
import { GlobalStyles } from "GlobalStyles";
import { StrictMode } from "react";
import { render } from "react-dom";
import { Router } from "Router";

import reportWebVitals from "./reportWebVitals";

render(
  <StrictMode>
    <HistoryRouter>
      <GlobalStyles />
      <Router />
    </HistoryRouter>
  </StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
