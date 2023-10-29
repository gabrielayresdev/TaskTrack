import { render, screen } from '@testing-library/react'
import Register from './Register.tsx'

const { getByTestId } = screen;



describe('<Register />', () => {
  beforeEach(() => {
    render(<Register />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})