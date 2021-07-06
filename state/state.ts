export interface SimulatorState {
  clients: Client[]
  services: Service[]
  resources: Resource[]
}

export interface Client {
  title: string
  reqRate: number
  timeRate: number
  hasConnection: boolean
  coordX: number
  coordY: number
}

export interface Service {
  title: string
  reqinprogress: number
  maxreqcapacity: number
  failurerate: number
  timeRate: number
  coordX: number
  coordY: number
}

export interface Resource {
  title: string
  minlatency: number
  maxlatency: number
  timeRate: number
  failurerate: number
  coordX: number
  coordY: number
}

export const initialSimulatorState: SimulatorState = {
  clients: [],
  services: [],
  resources: [],
}
