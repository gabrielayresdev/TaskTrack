import type { Meta, StoryObj } from '@storybook/react'

import { AuthHeader } from './AuthHeader.tsx'

const meta = {
  title: 'components/AuthHeader',
  component: AuthHeader,
} as Meta

export default meta

const template = {
  render: () => <AuthHeader />,
}

export const Default: StoryObj = {
  ...template,
}