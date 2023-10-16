import type { Meta, StoryObj } from "@storybook/react";

import { Notification } from "./Index.tsx";

const meta = {
  title: "components/Notification",
  component: Notification,
} as Meta;

export default meta;

const template = {
  render: () => <Notification />,
};

export const Default: StoryObj = {
  ...template,
};
