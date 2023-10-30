import { render, screen } from '@testing-library/react'
import Home from './Home.tsx'

const { getByTestId } = screen;



describe('<Home />', () => {
  beforeEach(() => {
    render(<Home />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})