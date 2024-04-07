import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Button from "./Button";

describe("Button", () => {
  it("renders a button", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });

    expect(button).toBeVisible();
  });
});
