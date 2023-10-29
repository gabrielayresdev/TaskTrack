import type { Meta, StoryObj } from '@storybook/react'

import { GroupsForm } from './GroupsForm.tsx'

const meta = {
  title: 'components/GroupsForm',
  component: GroupsForm,
} as Meta

export default meta

const template = {
  render: () => <GroupsForm />,
}

export const Default: StoryObj = {
  ...template,
}