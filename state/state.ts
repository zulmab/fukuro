export interface SimulatorState {
  clients: Client[]
  services: Service[]
  resources: Resource[]
}

export interface Base {
  id: string
  label: string
  type: string
  x: number
  y: number
  resources: string[]
}

export interface Client extends Base {
  requestRate: number
}

export interface Service extends Base {
  maxRequestCapacity: number
  concurrency: number
}

export interface Resource extends Base {
  minLatency: number
  maxLatency: number
  failureRate: number
  concurrency: number
}

export const initialSimulatorState: SimulatorState = {
  clients: [],
  services: [],
  resources: [],
}
