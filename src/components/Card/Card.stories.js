import React from "react";

import { storiesOf } from "@storybook/react";

import Card from ".";

storiesOf("Card", module).add("with body", () => (
  <Card title="I'm a card">I have a title and a body</Card>
));
