import type { Meta, StoryObj } from "@storybook/react";

import { Authenticate } from "./Authenticate.tsx";

const meta = {
  title: "components/Authenticate",
  component: Authenticate,
} as Meta;

export default meta;

const template = {
  render: () => <Authenticate />,
};

export const Default: StoryObj = {
  ...template,
};
