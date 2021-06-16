import { render, screen, fireEvent } from '@testing-library/react'
import { Main } from './Main'

describe('Layout/Main', () => {
  test('Render all main layout structure', () => {
    // Arrange - Act
    render(<Main />)
    // Assert
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('toolbar')).toBeInTheDocument()
  })

  test('Re arrange navbar after show toolbar', async () => {
    // Arrange
    render(<Main />)
    const burgerButton = screen.getByTestId('burger-button')
    // Act
    fireEvent.click(burgerButton)
    const appbar = await screen.findByRole('navigation')
    const toolbar = screen.getByRole('toolbar')
    // Assert
    expect(appbar.className.includes('appBarShift')).toBeTruthy()
    expect(burgerButton.className.includes('hide')).toBeTruthy()
    expect(toolbar).toBeInTheDocument()
  })

  test('Hide toolbar', async () => {
    // Arrange
    render(<Main />)
    const burgerButton = screen.getByTestId('burger-button')
    const backButton = screen.getByTestId('back-button')
    // Act
    fireEvent.click(burgerButton)
    fireEvent.click(backButton)
    const appbar = await screen.findByRole('navigation')
    const toolbar = screen.getByRole('toolbar')
    // Assert
    expect(appbar.className.includes('appBarShift')).toBeFalsy()
    expect(burgerButton.className.includes('hide')).toBeFalsy()
    expect(toolbar).toBeInTheDocument()
  })
})
