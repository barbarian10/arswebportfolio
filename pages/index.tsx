import type { NextPage } from 'next'
import Head from 'next/head'
import { Landing } from '../components/Home'
import logo from '../assets/logo-light.svg'

const Home: NextPage = () => {
  return (
    <div>
      <Head>

        <title>Arslan Bektemir</title>
        <meta name="description" content="personal portfolio app" />

        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Arslan Bektemir" />
        <meta property="og:description" content="personal portfolio app" />
        <meta property="og:image" content={logo} />

      
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#323538" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

      </Head>
      <main>
        <Landing />
      </main>
    </div>
  )
}

export default Home