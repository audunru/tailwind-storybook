import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "./App";

describe("App", () => {
  it("contains a button", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "Click me" });

    expect(button).toBeVisible();
  });
});
