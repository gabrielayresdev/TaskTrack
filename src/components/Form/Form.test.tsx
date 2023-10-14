import { render, screen } from '@testing-library/react'
import Form from './Form.tsx'

const { getByTestId } = screen;



describe('<Form />', () => {
  beforeEach(() => {
    render(<Form />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})