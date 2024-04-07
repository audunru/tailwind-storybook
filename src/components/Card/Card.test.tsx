import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Card from "./Card";

describe("Card", () => {
  it("renders a card", () => {
    render(<Card title="Title">Text</Card>);

    const title = screen.getByRole("heading", { name: "Title" });
    const text = screen.getByText("Text");

    expect(title).toBeVisible();
    expect(text).toBeVisible();
  });
});
