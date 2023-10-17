import { render, screen } from '@testing-library/react'
import GroupsForm from './GroupsForm.tsx'

const { getByTestId } = screen;



describe('<GroupsForm />', () => {
  beforeEach(() => {
    render(<GroupsForm />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})