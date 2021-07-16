import React, { useEffect, useReducer } from 'react'
import { Main } from '../layout/Main'
import classes from '../styles/Home.module.css'
import { Client } from '../components/architecture/Client'
import { Service } from '../components/architecture/Service'
import { Resource } from '../components/architecture/Resource'
import { SimulatorContext } from '../state/context'
import { simulatorReducer } from '../state/reducer'
import {
  initialSimulatorState,
  Resource as IResource,
  Client as IClient,
  Service as IService,
} from '../state/state'

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
          {state.clients.map((c: IClient, index) => (
            <Client
              id={`clientId-${index}`}
              title={c.label}
              x={c.x}
              y={c.y}
              requestRate={c.requestRate}
              key={`client-${index}`}
            />
          ))}
          {state.services.map((c: IService, index) => (
            <Service
              id={`serviceId-${index}`}
              title={c.label}
              x={c.x}
              y={c.y}
              maxrequestcapacity={c.maxRequestCapacity}
              concurrencia={c.concurrency}
              key={`service-${index}`}
            />
          ))}
          {state.resources.map((r: IResource, index) => (
            <Resource
              id={`resourceId-${index}`}
              title={r.label}
              x={r.x}
              y={r.y}
              minimumlatency={r.minLatency}
              maximlatency={r.maxLatency}
              failurerate={r.failureRate}
              concurrencia={r.concurrency}
              key={`resource-${index}`}
            />
          ))}
        </svg>
      </Main>
    </SimulatorContext.Provider>
  )
}
