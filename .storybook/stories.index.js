import { addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { Padding } from "./stories.decorators";
import { withStaticMarkup } from "storybook-react-to-static-markup";

addDecorator(withStaticMarkup);
addDecorator(withA11y);
addDecorator(Padding);
