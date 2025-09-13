import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from ".";

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    title: "Hello",
    children: "This is some text",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: (args) => <Card {...args} />,
};
