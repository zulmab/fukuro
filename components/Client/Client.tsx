import { FC, useEffect } from 'react'
import classes from './Client.module.css'

export interface IClientProps {
  x: number
  y: number
  requestRate?: number
  timeRate?: number
  hasConnection?: boolean
}

const Client: FC<IClientProps> = ({ x, y, requestRate = 1, timeRate = 1, hasConnection }) => {
  const textPostion = {
    x: x + 20,
    y: y + 30,
  }

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (hasConnection) {
      timer = setInterval(() => {
        for (const request of Array(requestRate)) console.log('Request')
      }, timeRate * 1000)
    }

    return () => clearInterval(timer)
  }, [hasConnection, requestRate, timeRate])

  return (
    <g>
      <rect x={x} y={y} width="90" height="46" fill="white" stroke="black" strokeWidth="2px" />
      <text x={textPostion.x} y={textPostion.y} font-family="Verdana" font-size="16" fill="black">
        Client
      </text>
    </g>
  )
}

export default Client
