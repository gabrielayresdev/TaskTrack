import { render, screen } from '@testing-library/react'
import RadioButton from './RadioButton.tsx'

const { getByTestId } = screen;



describe('<RadioButton />', () => {
  beforeEach(() => {
    render(<RadioButton />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})