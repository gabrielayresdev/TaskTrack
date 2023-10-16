import type { Meta, StoryObj } from '@storybook/react'

import { NotificationContent } from './NotificationContent.tsx'

const meta = {
  title: 'components/NotificationContent',
  component: NotificationContent,
} as Meta

export default meta

const template = {
  render: () => <NotificationContent />,
}

export const Default: StoryObj = {
  ...template,
}