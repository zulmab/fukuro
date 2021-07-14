import React from 'react'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./../components/Arrow').then((mod: any) => mod.MyArrow), {
  loading: () => <p>...</p>,
  ssr: false,
})

export default () => <Map />
