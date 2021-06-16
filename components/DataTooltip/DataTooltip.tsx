import { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

export interface IDataTooltipProps {
  content: JSX.Element
  children: JSX.Element
}

export const DataTooltip = (props: IDataTooltipProps) => {
  const CustomTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip)

  return (
    <CustomTooltip title={<Fragment>{props.content}</Fragment>} data-testid="data-tooltip">
      {props.children}
    </CustomTooltip>
  )
}
