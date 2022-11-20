import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Optimum Courses</title>
        <meta name="description" content="Tech Optimum Courses by Tech Optimum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <Image width={"400px"} height="150px" src="/text-lblue-transparent.png"/>
        <h1  className={styles.title}>
          Courses Portal
        </h1>
        <br/>
        <br/>

  

        <div className={styles.grid}>
          <a href="./5b245c12-e448-43ff-8183-373c37db2a62" className={styles.card}>
            <h2>Intro to Web Dev. &rarr;</h2>
  
          </a>

         

          
        </div>
      </main>

    
    </div>
  )
}

export default Home
