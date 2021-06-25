import React, { FC, useEffect, Fragment } from 'react'
import classes from './Service.module.css'
import { DataTooltip } from '../../DataTooltip'
import { DataTable } from '../../DataTable/DataTable'

export interface IServiceProps {
  x: number
  y: number
  requestinprogress?: number
  requestimaxcapacity?: number
  timeRate?: number
  hasConnection?: boolean
}

export const Service: FC<IServiceProps> = ({
  x,
  y,
  requestinprogress = 1,
  requestimaxcapacity = 1,
  timeRate = 1,
  hasConnection,
}) => {
  const labelPostion = {
    x: x + 20,
    y: y + 30,
  }

  const DataTableJSON: object[] = [
    {
      title: 'Req. in progress',
      value: requestinprogress,
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

  return (
    <DataTooltip content={<DataTable body={DataTableJSON} />}>
      <g data-testid="arch-service">
        <rect x={x} y={y} className={classes.service} />
        <text x={labelPostion.x} y={labelPostion.y} className={classes.service_label}>
          Service
        </text>
        <text x={x} y={y + 65} className={classes.service_data}>
          Req. in progress: {requestinprogress} req / {timeRate} sec
        </text>
        <text x={x} y={y + 85} className={classes.service_data}>
          Max req. capacity: {requestimaxcapacity} req / {timeRate} sec
        </text>
      </g>
    </DataTooltip>
  )
}
