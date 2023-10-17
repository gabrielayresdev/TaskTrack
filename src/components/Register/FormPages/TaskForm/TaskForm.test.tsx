import { render, screen } from '@testing-library/react'
import TaskForm from './TaskForm.tsx'

const { getByTestId } = screen;



describe('<TaskForm />', () => {
  beforeEach(() => {
    render(<TaskForm />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})