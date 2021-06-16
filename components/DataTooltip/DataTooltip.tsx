import { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

export interface IDataTooltip {
  content: JSX.Element
  children: JSX.Element
}

export const DataTooltip = (props: IDataTooltip) => {
  const CustomTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip)

  return (
    <CustomTooltip title={<Fragment>{props.content}</Fragment>}>{props.children}</CustomTooltip>
  )
}
