import { render, screen } from '@testing-library/react'
import Button from './Button.tsx'

const { getByTestId } = screen;



describe('<Button />', () => {
  beforeEach(() => {
    render(<Button />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})