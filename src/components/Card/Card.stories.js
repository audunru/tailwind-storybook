import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Card from ".";

storiesOf("Card", module).add("with title and body", () => (
  <Card title={text("Title", "I am a card")}>
    {text("Body", "I have a title and a body")}
  </Card>
));
