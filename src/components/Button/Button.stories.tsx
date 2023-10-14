import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button.tsx'

const meta = {
  title: 'components/Button',
  component: Button,
} as Meta

export default meta

const template = {
  render: () => <Button />,
}

export const Default: StoryObj = {
  ...template,
}