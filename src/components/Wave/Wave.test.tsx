import { render, screen } from '@testing-library/react'
import Wave from './Wave.tsx'

const { getByTestId } = screen;



describe('<Wave />', () => {
  beforeEach(() => {
    render(<Wave />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})