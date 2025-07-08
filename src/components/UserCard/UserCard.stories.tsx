import type { Meta, StoryObj } from "@storybook/react";
import UserCard from ".";

const meta: Meta<typeof UserCard> = {
  component: UserCard,
  args: {
    name: "Benyamin Hosseinzadeh",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
    jobTitle: "Frontend Developer",
    onViewProfile: () => alert("view profile clicked!"),
  },
};

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Primary: Story = {
  render: (args) => <UserCard {...args} />,
};
