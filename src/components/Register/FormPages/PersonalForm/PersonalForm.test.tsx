import { render, screen } from '@testing-library/react'
import PersonalForm from './PersonalForm.tsx'

const { getByTestId } = screen;



describe('<PersonalForm />', () => {
  beforeEach(() => {
    render(<PersonalForm />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})