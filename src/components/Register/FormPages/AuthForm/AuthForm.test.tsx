import { render, screen } from '@testing-library/react'
import AuthForm from './AuthForm.tsx'

const { getByTestId } = screen;



describe('<AuthForm />', () => {
  beforeEach(() => {
    render(<AuthForm />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})