import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input.tsx'

const meta = {
  title: 'components/Input',
  component: Input,
} as Meta

export default meta

const template = {
  render: () => <Input />,
}

export const Default: StoryObj = {
  ...template,
}