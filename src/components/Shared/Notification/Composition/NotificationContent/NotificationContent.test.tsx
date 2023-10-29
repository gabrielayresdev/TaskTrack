import { render, screen } from '@testing-library/react'
import NotificationContent from './NotificationContent.tsx'

const { getByTestId } = screen;



describe('<NotificationContent />', () => {
  beforeEach(() => {
    render(<NotificationContent />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})