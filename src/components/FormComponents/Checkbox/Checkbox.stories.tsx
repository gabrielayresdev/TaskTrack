import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox.tsx'

const meta = {
  title: 'components/Checkbox',
  component: Checkbox,
} as Meta

export default meta

const template = {
  render: () => <Checkbox />,
}

export const Default: StoryObj = {
  ...template,
}