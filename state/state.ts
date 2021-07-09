export interface SimulatorState {
  clients: Client[]
  services: Service[]
  resources: Resource[]
}

export interface Client {
  id: string
  title: string
  type: string
  reqRate: number
  hasConnection: boolean
  coordX: number
  coordY: number
  idservice: string
}

export interface Service {
  id: string
  title: string
  type: string
  maxreqcapacity: number
  coordX: number
  coordY: number
  idresource: string
  concurrencia: number
}

export interface Resource {
  id: string
  title: string
  type: string
  minlatency: number
  maxlatency: number
  failurerate: number
  coordX: number
  coordY: number
  concurrencia: number
}

export const initialSimulatorState: SimulatorState = {
  clients: [],
  services: [],
  resources: [],
}
