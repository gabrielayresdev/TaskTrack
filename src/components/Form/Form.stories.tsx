import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "./Form.tsx";

const meta = {
  title: "components/Form",
  component: Form,
} as Meta;

export default meta;

const template = {
  render: () => <Form />,
};

export const Default: StoryObj = {
  ...template,
};
