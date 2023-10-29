import type { Meta, StoryObj } from '@storybook/react'

import { Register } from './Register.tsx'

const meta = {
  title: 'components/Register',
  component: Register,
} as Meta

export default meta

const template = {
  render: () => <Register />,
}

export const Default: StoryObj = {
  ...template,
}