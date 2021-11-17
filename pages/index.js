import Head from 'next/head'
import { Toolbar } from '../components/toolbar'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<>
    <Head>
    <title>News App</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta property="og:title" content="Home Page" key="home" />
    </Head>
    <div className="page-container">
<Toolbar />
<div className={styles.main}>
        <h1>News Streaming App</h1>
        <h2>Your one stop for the latest news articles. Just click of News link on top.</h2>
        <Image src="/banner.png" width={600} height={400} />
      <h2> My social links are also added if you are interested.</h2>
      <h3>Enjoy your read!</h3>
      <Link href="https://www.vaniadimova.com">www.vaniadimova.com</Link>
      </div>
    </div>
    </>
  )
}
