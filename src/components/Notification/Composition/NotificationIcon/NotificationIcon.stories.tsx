import type { Meta, StoryObj } from '@storybook/react'

import { NotificationIcon } from './NotificationIcon.tsx'

const meta = {
  title: 'components/NotificationIcon',
  component: NotificationIcon,
} as Meta

export default meta

const template = {
  render: () => <NotificationIcon />,
}

export const Default: StoryObj = {
  ...template,
}