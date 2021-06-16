import { render, screen, fireEvent } from '@testing-library/react'
import { DataTooltip } from './DataTooltip'

describe('DataTooltip', () => {
  test('Render tooltip with content on hover', async () => {
    // Arrange
    render(
      <DataTooltip content={<p>World</p>}>
        <div>Hello</div>
      </DataTooltip>
    )
    // Act
    fireEvent.mouseOver(screen.getByTestId('data-tooltip'))
    // Arrange
    const tooltip = await screen.findByText('World')
    expect(tooltip).toBeInTheDocument()
  })
})
