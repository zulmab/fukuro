import { FC } from 'react'

import Arrow, { DIRECTION, HEAD } from 'react-arrows'

export interface IArrowProps {
  to: string
  fm: string
}

export const MyArrow: FC<IArrowProps> = ({ fm, to }) => {
  return (
    <>
      <Arrow
        className="arrow"
        from={{
          direction: DIRECTION.RIGHT,
          node: () => document.getElementById(fm),
          translation: [0, 0],
        }}
        to={{
          direction: DIRECTION.LEFT,
          node: () => document.getElementById(to),
          translation: [0, 0],
        }}
        head={{
          func: HEAD.NORMAL,
          size: 10, // custom options that will be passed to head function
          distance: 0.98,
        }}
      />
    </>
  )
}
