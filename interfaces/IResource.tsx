import { IResourceAProps } from './IResourceProps'

export interface IResourceProps extends IResourceAProps {
  title?: string
  minimumlatency?: number
  maximlatency?: number
  failurerate?: number
  timeRate?: number
}
