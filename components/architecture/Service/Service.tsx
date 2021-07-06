import React, { FC, useState } from 'react'
import classes from './Service.module.css'
import { DataTooltip } from '../../DataTooltip'
import { DataTable } from '../../DataTable/DataTable'
import { IServiceProps } from '../../../interfaces/IService'
import { makeLabelPosition } from '../../../utils/utilities'
import { ModalService } from '../../Modal/ModalService'

export const Service: FC<IServiceProps> = ({
  title,
  x,
  y,
  requestinprogress = 1,
  maxrequestcapacity = 1,
  failurerate = 1,
}) => {
  const [open, setOpen] = useState(false)
  const labelPostion = makeLabelPosition(x, y)

  const DataJSON: object[] = [
    {
      title: 'Req. in progress',
      value: requestinprogress,
      field: 'reqinprogress',
      postfix: '',
      abbv: '',
    },
    {
      title: 'Max req. capacity',
      value: maxrequestcapacity,
      field: 'maxreqcapacity',
      postfix: '',
      abbv: '',
    },
    {
      title: 'Failure rate',
      value: failurerate,
      field: 'failurerate',
      postfix: '%',
      abbv: '%',
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
        <g data-testid="arch-service">
          <rect x={x} y={y} className={classes.service} />
          <text
            x={labelPostion.x}
            y={labelPostion.y}
            className={classes.service_label}
            onClick={handleClick}
          >
            {title}
          </text>
          <text x={x} y={y + 65} className={classes.service_data}>
            Req. in progress: {requestinprogress}
          </text>
          <text x={x} y={y + 85} className={classes.service_data}>
            Max req. capacity: {maxrequestcapacity}
          </text>
          <text x={x} y={y + 105} className={classes.service_data}>
            Failure rate: {failurerate} %
          </text>
        </g>
      </DataTooltip>
      {open && (
        <ModalService
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
          title={'Edit Service params'}
        />
      )}
    </>
  )
}
