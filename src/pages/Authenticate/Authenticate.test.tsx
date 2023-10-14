import { render, screen } from '@testing-library/react'
import Authenticate from './Authenticate.tsx'

const { getByTestId } = screen;



describe('<Authenticate />', () => {
  beforeEach(() => {
    render(<Authenticate />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})