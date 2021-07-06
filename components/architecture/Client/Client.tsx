import React, { FC, useEffect, useState } from 'react'
import classes from './Client.module.css'
import { DataTooltip } from '../../DataTooltip'
import { DataTable } from '../../DataTable'
import { IClientProps } from '../../../interfaces/IClient'
import { makeLabelPosition } from '../../../utils/utilities'
import { Modal } from '../../Modal'

export const Client: FC<IClientProps> = ({
  title,
  x,
  y,
  requestRate = 1,
  timeRate = 1,
  hasConnection,
}) => {
  const [open, setOpen] = useState(false)
  const labelPostion = makeLabelPosition(x, y)

  const DataJSON: object[] = [
    {
      title: 'Request rate',
      value: requestRate,
      field: 'reqRate',
      postfix: 'requests',
      abbv: 'req',
    },
    {
      title: 'Time rate',
      value: timeRate,
      field: 'timeRate',
      postfix: 'sec',
      abbv: 'sec',
    },
  ]

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
    <>
      <DataTooltip content={<DataTable body={DataJSON} />}>
        <g data-testid="arch-client">
          <rect x={x} y={y} className={classes.client} />
          <text
            x={labelPostion.x}
            y={labelPostion.y}
            className={classes.client_label}
            onClick={handleClick}
          >
            {title}
          </text>
          <text x={x} y={y + 65} className={classes.client_data}>
            Rate: {requestRate} req / {timeRate} sec
          </text>
        </g>
      </DataTooltip>
      {open && (
        <Modal
          open={open}
          data={[
            {
              title: 'title',
              value: title,
              field: 'title',
              postfix: '',
              abbv: '',
            },
            ...DataJSON,
          ]}
          handleClose={handleClose}
          handleSave={handleClose}
          title={'Edit Client params'}
        />
      )}
    </>
  )
}
