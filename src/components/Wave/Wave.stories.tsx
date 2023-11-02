import type { Meta, StoryObj } from '@storybook/react'

import { Wave } from './Wave.tsx'

const meta = {
  title: 'components/Wave',
  component: Wave,
} as Meta

export default meta

const template = {
  render: () => <Wave />,
}

export const Default: StoryObj = {
  ...template,
}