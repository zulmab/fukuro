import React, { useEffect, useReducer } from 'react'
import { Main } from '../layout/Main'
import classes from '../styles/Home.module.css'
import { Client } from '../components/architecture/Client'
import { Service } from '../components/architecture/Service'
import { Resource } from '../components/architecture/Resource'
import { SimulatorContext } from '../state/context'
import { simulatorReducer } from '../state/reducer'
import { initialSimulatorState } from '../state/state'

export default function Home(): JSX.Element {
  const [state, dispatch] = useReducer(simulatorReducer, initialSimulatorState)

  useEffect(() => {
    console.log(state)
  }, [state])
  return (
    <SimulatorContext.Provider value={{ state, dispatch }}>
      <Main>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1200"
          height="620"
          className={classes.canvas}
        >
          {state.clients.map((c, index) => (
            <Client
              title={c.title}
              x={c.coordX}
              y={c.coordY}
              requestRate={c.reqRate}
              hasConnection={c.hasConnection}
              key={`client-${index}`}
            />
          ))}
          {state.services.map((c, index) => (
            <Service
              title={c.title}
              x={c.coordX}
              y={c.coordY}
              maxrequestcapacity={c.maxreqcapacity}
              concurrencia={c.concurrencia}
              key={`service-${index}`}
            />
          ))}
          {state.resources.map((r, index) => (
            <Resource
              title={r.title}
              x={r.coordX}
              y={r.coordY}
              minimumlatency={r.minlatency}
              maximlatency={r.maxlatency}
              failurerate={r.failurerate}
              concurrencia={r.concurrencia}
              key={`resource-${index}`}
            />
          ))}
        </svg>
      </Main>
    </SimulatorContext.Provider>
  )
}
