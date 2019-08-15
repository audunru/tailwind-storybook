import React from "react";
import { addDecorator } from "@storybook/react";
import { withStaticMarkup } from "storybook-react-to-static-markup";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withStaticMarkup);
addDecorator(withA11y);
addDecorator(withKnobs);

const Padding = storyFn => <div className="p-4">{storyFn()}</div>;
addDecorator(Padding);
