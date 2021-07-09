import React from 'react'
import { render, screen } from '@testing-library/react'
import { Client } from './Client'
import { IClientProps } from '../../../interfaces/IClient'

describe('Architecture/Client', () => {
  test('Render client component as svg element and', () => {
    // Arrange
    const clienteProps: IClientProps = {
      title: 'Client',
      x: 1,
      y: 1,
    }
    // Act
    render(
      <svg>
        <Client {...clienteProps} />
      </svg>
    )
    // Assert
    const rect = screen.queryByTestId('arch-client')?.children[0]
    expect(rect?.tagName).toBe('rect')
    expect(screen.queryByText('Client')).toBeInTheDocument()
    expect(screen.queryByText('Rate: 1 req')).toBeInTheDocument()
  })

  test('Set the component on the right position', () => {
    // Arrange
    const clienteProps: IClientProps = {
      title: 'Client',
      x: 1,
      y: 1,
    }
    // Act
    render(
      <svg>
        <Client {...clienteProps} />
      </svg>
    )
    // Assert
    const rect = screen.getByTestId('arch-client')?.children[0]
    const label = screen.getByText('Client')
    const data = screen.getByText('Rate: 1 req')
    expect(rect.getAttribute('x')).toBe('1')
    expect(rect.getAttribute('y')).toBe('1')
    expect(label.getAttribute('x')).toBe('21')
    expect(label.getAttribute('y')).toBe('31')
    expect(data.getAttribute('x')).toBe('1')
    expect(data.getAttribute('y')).toBe('66')
  })
})
