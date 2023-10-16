import { render, screen } from '@testing-library/react'
import NotificationIcon from './NotificationIcon.tsx'

const { getByTestId } = screen;



describe('<NotificationIcon />', () => {
  beforeEach(() => {
    render(<NotificationIcon />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})