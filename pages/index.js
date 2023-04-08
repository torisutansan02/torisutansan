import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>torisutansan</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            torisutansan is a personal project I am working on.
          </p>
        </div>

        <div className = {styles.grid}>
            <a
              href = "https://linkedin.com/in/tristan-cai-b89571267"
              target = "_blank"
              rel = "noopener noreferrer"
            >
          </a>
          <h2 className = {inter.className}>
            Employment <span> -&gt; </span>
          </h2>
          <p className = {inter.className}>
            LinkedIn Profile
          </p>
        </div>

      </main>

  </>
  )
}