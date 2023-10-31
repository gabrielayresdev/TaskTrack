import { render, screen } from '@testing-library/react'
import Checkbox from './Checkbox.tsx'

const { getByTestId } = screen;



describe('<Checkbox />', () => {
  beforeEach(() => {
    render(<Checkbox />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})