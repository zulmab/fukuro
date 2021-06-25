import React, { FC, useEffect } from 'react'
import classes from './Client.module.css'
import { DataTooltip } from '../../DataTooltip'
import { DataTable } from '../../DataTable'

export interface IClientProps {
  x: number
  y: number
  requestRate?: number
  timeRate?: number
  hasConnection?: boolean
}

export const Client: FC<IClientProps> = ({
  x,
  y,
  requestRate = 1,
  timeRate = 1,
  hasConnection,
}) => {
  const labelPostion = {
    x: x + 20,
    y: y + 30,
  }

  const DataTableJSON: object[] = [
    {
      title: 'Request rate',
      value: requestRate,
      postfix: 'requests',
      abbv: 'req',
    },
    {
      title: 'Time rate',
      value: timeRate,
      postfix: 'sec',
      abbv: 'sec',
    },
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (hasConnection) {
      timer = setInterval(() => {
        for (const request of Array(requestRate))
          console.log({ id: 'some_id', payload: 'some payload', connectTo: 'some_id' })
      }, timeRate * 1000)
    }

    return () => clearInterval(timer)
  }, [hasConnection, requestRate, timeRate])

  return (
    <DataTooltip content={<DataTable body={DataTableJSON} />}>
      <g data-testid="arch-client">
        <rect x={x} y={y} className={classes.client} />
        <text x={labelPostion.x} y={labelPostion.y} className={classes.client_label}>
          Client
        </text>
        <text x={x} y={y + 65} className={classes.client_data}>
          Rate: {requestRate} req / {timeRate} sec
        </text>
      </g>
    </DataTooltip>
  )
}
