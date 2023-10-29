import type { Meta, StoryObj } from "@storybook/react";

import { AuthenticationToggle } from "./AuthenticationToggle.tsx";
import { mockAuthenticationToggle } from "./Authenticationtoggle.test.tsx";

const meta = {
  title: "components/Authenticationtoggle",
  component: AuthenticationToggle,
  args: mockAuthenticationToggle,
} as Meta;

export default meta;

const template = {
  render: () => <AuthenticationToggle {...mockAuthenticationToggle} />,
};

export const Default: StoryObj = {
  ...template,
};
