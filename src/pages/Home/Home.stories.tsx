import type { Meta, StoryObj } from '@storybook/react'

import { Home } from './Home.tsx'

const meta = {
  title: 'components/Home',
  component: Home,
} as Meta

export default meta

const template = {
  render: () => <Home />,
}

export const Default: StoryObj = {
  ...template,
}