import React from "react";

import { storiesOf } from "@storybook/react";

import Button from ".";

storiesOf("Button", module)
  .add("with text", () => <Button>I'm a button</Button>)
  .add("with other text", () => <Button>I'm a button too</Button>);
