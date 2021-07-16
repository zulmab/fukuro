import {
  ActionType,
  AddClient,
  AddResource,
  AddService,
  EditClient,
  EditResource,
  EditService,
  SimulatorActions,
} from './actions'
import { Client, Service, Resource, SimulatorState } from './state'

export const simulatorReducer = (state: SimulatorState, action: SimulatorActions) => {
  const { value, field } = action.payload

  switch (action.type) {
    case ActionType.AddClient:
      if (state.clients.length < 1) {
        return {
          ...state,
          clients: [action.payload, ...state.clients],
        }
      }

      return state

    case ActionType.EditClient:
      let currentClient: any = state.clients[0]
      currentClient[field] = value
      return {
        ...state,
        clients: [currentClient],
      }

    case ActionType.AddService:
      if (state.services.length < 1) {
        return {
          ...state,
          services: [action.payload, ...state.services],
        }
      }

      return state

    case ActionType.EditService:
      let currentService: any = state.services[0]
      console.log('here', action.payload, currentService)
      currentService[field] = value
      return {
        ...state,
        services: [currentService],
      }

    case ActionType.AddResource:
      if (state.resources.length < 1) {
        return {
          ...state,
          resources: [action.payload, ...state.resources],
        }
      }

      return state

    case ActionType.EditResource:
      let currentResource: any = state.resources[0]
      currentResource[field] = value
      return {
        ...state,
        resources: [currentResource],
      }

    default:
      return state
  }
}

// helper functions to simplify the caller
export const addClient = (Client: Client): AddClient => ({
  type: ActionType.AddClient,
  payload: Client,
})

export const editClient = (value: string, field: string): EditClient => ({
  type: ActionType.EditClient,
  payload: {
    value,
    field,
  },
})

export const addService = (Service: Service): AddService => ({
  type: ActionType.AddService,
  payload: Service,
})

export const editService = (value: string, field: string): EditService => ({
  type: ActionType.EditService,
  payload: {
    value,
    field,
  },
})

export const addResource = (Resource: Resource): AddResource => ({
  type: ActionType.AddResource,
  payload: Resource,
})

export const editResource = (value: string, field: string): EditResource => ({
  type: ActionType.EditResource,
  payload: {
    value,
    field,
  },
})
