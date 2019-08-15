import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import Button from ".";

const variants = {
  Primary: "primary",
  Secondary: "secondary",
  Default: null
};

storiesOf("Button", module)
  .add("primary", () => (
    <Button variant={select("Variant", variants, "primary")}>
      {text("Text", "I am a button")}
    </Button>
  ))
  .add("secondary", () => (
    <Button variant={select("Variant", variants, "secondary")}>
      {text("Text", "I am a button too")}
    </Button>
  ));
