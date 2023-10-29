import { render, screen } from '@testing-library/react'
import AuthHeader from './AuthHeader.tsx'

const { getByTestId } = screen;



describe('<AuthHeader />', () => {
  beforeEach(() => {
    render(<AuthHeader />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})