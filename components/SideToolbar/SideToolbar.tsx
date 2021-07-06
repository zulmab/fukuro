import { FC, useContext } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { useTheme } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useStyles } from './uiStyles'
import { SimulatorContext } from '../../state/context'
import { addClient, addService, addResource } from '../../state/reducer'

export interface ISideToolbar {
  isOpen: boolean
  onClose: () => void
}

export interface Item {
  text: string
  action: () => void
}

export const SideToolbar: FC<ISideToolbar> = (props) => {
  const theme = useTheme()
  const classes = useStyles()
  const { dispatch } = useContext(SimulatorContext)

  const listItems: Item[] = [
    {
      text: 'Client',
      action: () => {
        dispatch(
          addClient({
            title: 'Client',
            reqRate: 10,
            timeRate: 2,
            hasConnection: false,
            coordX: 10,
            coordY: 200,
          })
        )
      },
    },
    {
      text: 'Service',
      action: () => {
        dispatch(
          addService({
            title: 'Service',
            reqinprogress: 62,
            maxreqcapacity: 50,
            failurerate: 70,
            timeRate: 2,
            coordX: 200,
            coordY: 200,
          })
        )
      },
    },
    {
      text: 'Resource',
      action: () => {
        dispatch(
          addResource({
            title: 'Resource',
            minlatency: 5,
            maxlatency: 20,
            failurerate: 25,
            timeRate: 2,
            coordX: 400,
            coordY: 200,
          })
        )
      },
    },
  ]

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.isOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
      role="toolbar"
    >
      <div className={classes.drawerHeader}>
        Components
        <IconButton onClick={props.onClose} data-testid="back-button">
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {listItems.map((item, index) => (
          <ListItem button onClick={item.action} key={item.text}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
