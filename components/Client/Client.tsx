import { FC, useEffect, Fragment } from 'react'
import classes from './Client.module.css'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
export interface IClientProps {
  x: number
  y: number
  requestRate?: number
  timeRate?: number
  hasConnection?: boolean
}

const Client: FC<IClientProps> = ({ x, y, requestRate = 1, timeRate = 1, hasConnection }) => {
  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip)

  const labelPostion = {
    x: x + 20,
    y: y + 30,
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
    <HtmlTooltip
      title={
        <Fragment>
          <table>
            <tr>
              <td>
                <strong>Request rate</strong>
              </td>
              <td>{requestRate}</td>
              <td>
                <strong>Time rate</strong>
              </td>
              <td>{timeRate}</td>
            </tr>
          </table>
        </Fragment>
      }
    >
      <g>
        <rect x={x} y={y} className={classes.client} />
        <text x={labelPostion.x} y={labelPostion.y} fontFamily="Verdana" fontSize="16" fill="black">
          Client
        </text>
        <text x={x} y={y + 65} fontFamily="Verdana" fontSize="10" fill="black">
          Rate: {requestRate} req / {timeRate}sec
        </text>
      </g>
    </HtmlTooltip>
  )
}

export default Client
