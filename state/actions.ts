import { Client, Service, Resource } from './state'

export enum ActionType {
  AddClient,
  EditClient,
  AddService,
  EditService,
  AddResource,
  EditResource,
}

export interface AddClient {
  type: ActionType.AddClient
  payload: Client
}

export interface EditClient {
  type: ActionType.EditClient
  payload: any
}

export interface AddService {
  type: ActionType.AddService
  payload: Service
}

export interface EditService {
  type: ActionType.EditService
  payload: any
}

export interface AddResource {
  type: ActionType.AddResource
  payload: Resource
}

export interface EditResource {
  type: ActionType.EditResource
  payload: any
}

export type SimulatorActions =
  | AddClient
  | EditClient
  | AddService
  | EditService
  | AddResource
  | EditResource
