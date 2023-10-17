import type { Meta, StoryObj } from '@storybook/react'

import { TaskForm } from './TaskForm.tsx'

const meta = {
  title: 'components/TaskForm',
  component: TaskForm,
} as Meta

export default meta

const template = {
  render: () => <TaskForm />,
}

export const Default: StoryObj = {
  ...template,
}