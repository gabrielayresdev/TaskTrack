import type { Meta, StoryObj } from '@storybook/react'

import { RadioButton } from './RadioButton.tsx'

const meta = {
  title: 'components/RadioButton',
  component: RadioButton,
} as Meta

export default meta

const template = {
  render: () => <RadioButton />,
}

export const Default: StoryObj = {
  ...template,
}