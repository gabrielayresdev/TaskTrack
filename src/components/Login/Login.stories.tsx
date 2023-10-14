import type { Meta, StoryObj } from '@storybook/react'

import { Login } from './Login.tsx'

const meta = {
  title: 'components/Login',
  component: Login,
} as Meta

export default meta

const template = {
  render: () => <Login />,
}

export const Default: StoryObj = {
  ...template,
}