import { IActorProps } from './IActorProps'

export interface IResourceProps extends IActorProps {
  title?: string
  minimumlatency?: number
  maximlatency?: number
  failurerate?: number
  concurrencia?: number
}
