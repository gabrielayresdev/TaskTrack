import { render, screen } from '@testing-library/react'
import Login from './Login.tsx'

const { getByTestId } = screen;



describe('<Login />', () => {
  beforeEach(() => {
    render(<Login />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})