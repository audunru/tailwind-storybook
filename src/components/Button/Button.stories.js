import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Button from ".";

storiesOf("Button", module)
  .add("with text", () => <Button>{text("Text", "I am a button")}</Button>)
  .add("with other text", () => (
    <Button>{text("Text", "I am a button too")}</Button>
  ));
