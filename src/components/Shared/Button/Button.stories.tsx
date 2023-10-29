import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button.tsx";

const mock = {
  text: "Carregar mais",
};

const meta = {
  title: "components/Button",
  component: Button,
  args: mock,
} as Meta;

export default meta;

const template = {
  render: () => <Button text="Carregar mais" />,
};

export const Default: StoryObj = {
  ...template,
};
