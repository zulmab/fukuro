import { FC, Fragment, useState } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import Navbar from '../../components/Navbar/Navbar'
import SideToolbar from '../../components/SideToolbar/SideToolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { useStyles } from './uiStyles'

const Main: FC = (props) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <Fragment>
      <Head>
        <title>Fukuro 🦉</title>
        <meta name="description" content="Architectural patterns simulator" />
      </Head>
      <section className={classes.root}>
        <CssBaseline />
        <Navbar onBurgerClick={handleDrawerOpen} isOpen={open} />

        <SideToolbar isOpen={open} onClose={handleDrawerClose} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          {props.children}
        </main>
      </section>
    </Fragment>
  )
}

export default Main
