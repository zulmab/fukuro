import { IAServiceProps } from './IAServiceProps'

export interface IServiceProps extends IAServiceProps {
  title: string
  requestinprogress?: number
  maxrequestcapacity?: number
  failurerate?: number
  timeRate?: number
}
