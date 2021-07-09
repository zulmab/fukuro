import { IActorProps } from './IActorProps'

export interface IClientProps extends IActorProps {
  title: string
  requestRate?: number
}
