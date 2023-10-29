import type { Meta, StoryObj } from "@storybook/react";

import { NotificationsContainer } from "./NotificationsContainer.tsx";

const meta = {
  title: "components/NotificationsContainer",
  component: NotificationsContainer,
} as Meta;

export default meta;

const template = {
  render: () => <NotificationsContainer />,
};

export const Default: StoryObj = {
  ...template,
};
