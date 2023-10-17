import type { Meta, StoryObj } from '@storybook/react'

import { AuthForm } from './AuthForm.tsx'

const meta = {
  title: 'components/AuthForm',
  component: AuthForm,
} as Meta

export default meta

const template = {
  render: () => <AuthForm />,
}

export const Default: StoryObj = {
  ...template,
}