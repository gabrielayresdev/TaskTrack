import { render, screen } from '@testing-library/react'
import NotificationButton from './NotificationButton.tsx'

const { getByTestId } = screen;



describe('<NotificationButton />', () => {
  beforeEach(() => {
    render(<NotificationButton />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})