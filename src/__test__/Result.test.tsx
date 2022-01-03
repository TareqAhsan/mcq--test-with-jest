import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import Result from "../pages/Result";
test("result test  render", () => {
  const history = createMemoryHistory();
  history.push("/result", {});
  render(
    <Router history={history}>
      <Result />
    </Router>
  );
  const result = screen.getByTestId('result');
  expect(result).toBeInTheDocument()
});
