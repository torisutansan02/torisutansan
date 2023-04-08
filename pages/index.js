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

          <p>
            Testing the React Framework&nbsp;
          </p>
        </div>

        <div className = {styles.grid}>
          <p>
            Hello, my name is Tristan. I am a 3rd year computer science student.
          </p>
        </div>

      </main>

  </>
  )
}