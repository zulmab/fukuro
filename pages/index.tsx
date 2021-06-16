import React from 'react'
import Main from '../layout/Main/Main'
import Client from '../components/Client/Client'

export default function PersistentDrawerLeft() {
  return (
    <Main>
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="620" className="canvas">
        <Client x={10} y={10} requestRate={10} timeRate={2} hasConnection={false} />
      </svg>
    </Main>
  )
}
