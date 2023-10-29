import type { Meta, StoryObj } from '@storybook/react'

import { NotificationButton } from './NotificationButton.tsx'

const meta = {
  title: 'components/NotificationButton',
  component: NotificationButton,
} as Meta

export default meta

const template = {
  render: () => <NotificationButton />,
}

export const Default: StoryObj = {
  ...template,
}