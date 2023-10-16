import type { Meta, StoryObj } from '@storybook/react'

import { NotificationRoot } from './NotificationRoot.tsx'

const meta = {
  title: 'components/NotificationRoot',
  component: NotificationRoot,
} as Meta

export default meta

const template = {
  render: () => <NotificationRoot />,
}

export const Default: StoryObj = {
  ...template,
}