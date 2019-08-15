import { configure } from "@storybook/react";

require("./stories.decorators");

const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
