import { render, screen } from '@testing-library/react'
import NotificationRoot from './NotificationRoot.tsx'

const { getByTestId } = screen;



describe('<NotificationRoot />', () => {
  beforeEach(() => {
    render(<NotificationRoot />)
  })

  test('Should pass always', () => {
    expect(1).toBe(1)
  })
})