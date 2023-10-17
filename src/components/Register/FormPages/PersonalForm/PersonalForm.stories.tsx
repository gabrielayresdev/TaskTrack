import type { Meta, StoryObj } from '@storybook/react'

import { PersonalForm } from './PersonalForm.tsx'

const meta = {
  title: 'components/PersonalForm',
  component: PersonalForm,
} as Meta

export default meta

const template = {
  render: () => <PersonalForm />,
}

export const Default: StoryObj = {
  ...template,
}