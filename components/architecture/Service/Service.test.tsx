import React from 'react'
import { render, screen } from '@testing-library/react'
import { Service } from './Service'
import { IServiceProps } from '../../../interfaces/IService'

describe('Architecture/Service', () => {
  test('Render service component as svg element and', () => {
    // Arrange
    const serviceProps: IServiceProps = {
      title: 'Service',
      requestinprogress: 1,
      maxrequestcapacity: 1,
      failurerate: 1,
      x: 1,
      y: 1,
    }
    // Act
    render(
      <svg>
        <Service {...serviceProps} />
      </svg>
    )
    // Assert
    const rect = screen.queryByTestId('arch-service')?.children[0]
    expect(rect?.tagName).toBe('rect')
    expect(screen.queryByText('Service')).toBeInTheDocument()
    expect(screen.queryByText('Req. in progress: 1')).toBeInTheDocument()
    expect(screen.queryByText('Max req. capacity: 1')).toBeInTheDocument()
    expect(screen.queryByText('Failure rate: 1 %')).toBeInTheDocument()
  })
})
