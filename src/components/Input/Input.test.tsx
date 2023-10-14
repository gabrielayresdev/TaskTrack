import { render, screen } from '@testing-library/react'
import Input from './Input.tsx'

const { getByTestId } = screen;



describe('<Input />', () => {
  beforeEach(() => {
    render(<Input />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})