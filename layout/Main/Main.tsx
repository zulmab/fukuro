import { FC, Fragment } from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Main.module.css'

const Main: FC = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Fukuro 🦉</title>
        <meta name="description" content="Architectural patterns simulator" />
      </Head>
      <main className={styles.main_container}>
        <nav>
          <Navbar />
        </nav>
        <section>{props.children}</section>
      </main>
    </Fragment>
  )
}

export default Main
