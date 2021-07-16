import React, { FC, useEffect, useState } from 'react'
import classes from './Client.module.css'
import { DataTooltip } from '../../DataTooltip'
import { DataTable } from '../../DataTable'
import { IClientProps } from '../../../interfaces/IClient'
import { makeLabelPosition } from '../../../utils/utilities'
import { Modal } from '../../Modal'

export const Client: FC<IClientProps> = ({ id, title, x, y, requestRate = 1 }) => {
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
  ]

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <DataTooltip content={<DataTable body={DataJSON} />}>
        <g data-testid="arch-client">
          <rect id={id} x={x} y={y} className={classes.client} onClick={handleClick} />
          <text x={labelPostion.x} y={labelPostion.y} className={classes.client_label}>
            {title}
          </text>
          <text x={x} y={y + 65} className={classes.client_data}>
            Rate: {requestRate} req
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
