import { FC, useEffect, useState } from 'react'
import { IArrowProps } from './IArrowProps'

export const Arrow: FC<IArrowProps> = ({ x, y, x2, y2 }) => {
  const [coords, setCoords] = useState({
    start_x: 0,
    start_y: 0,
    end_x: 0,
    end_y: 0,
  })
  const [arrowhead_polygon, setArrowhead_polygon] = useState('')

  const { start_x, start_y, end_x, end_y } = coords

  useEffect(() => {
    setCoords({
      start_x: x + 100,
      start_y: y + 25,
      end_x: x2,
      end_y: y2 + 25,
    })
    setArrowhead_polygon(`${x2},${y2 + 25} ${x2 - 4},${y2 + 29} ${x2 - 4},${y2 + 21}`)
  }, [])

  return (
    <g id={'#{origin}-#{destiny}'}>
      <line x1={start_x} y1={start_y} x2={end_x} y2={end_y} stroke="black" strokeWidth="1" />
      <polygon points={arrowhead_polygon} fill="black" stroke="black" strokeWidth="1" />
    </g>
  )
}
