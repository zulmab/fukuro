import React from 'react'
import { render, screen } from '@testing-library/react'
import { Resource } from './Resource'
import { IResourceProps } from '../../../interfaces/IResource'

describe('Architecture/Resource', () => {
  test('Render resource component as svg element and', () => {
    // Arrange
    const resourceProps: IResourceProps = {
      title: 'Resource',
      minimumlatency: 1,
      maximlatency: 1,
      failurerate: 1,
      x: 1,
      y: 1,
    }
    // Act
    render(
      <svg>
        <Resource {...resourceProps} />
      </svg>
    )
    // Assert
    const rect = screen.queryByTestId('arch-resource')?.children[0]
    expect(rect?.tagName).toBe('rect')
    expect(screen.queryByText('Resource')).toBeInTheDocument()
    expect(screen.queryByText('Min latency: 1 sec')).toBeInTheDocument()
    expect(screen.queryByText('Max latency: 1 sec')).toBeInTheDocument()
    expect(screen.queryByText('Failure rate: 1 %')).toBeInTheDocument()
  })
})
