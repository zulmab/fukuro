import { IActorProps } from './IActorProps'

export interface IServiceProps extends IActorProps {
  title: string
  maxrequestcapacity?: number
  concurrencia?: number
}
