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
      <main className = {styles.main}>
        <div className = {styles.description}>
          <p>
            torisutansan is a personal project I am working on.
          </p>
        </div>

        <div className = {styles.description}>
          <image
            className = {styles.logo}
            src = "/IMG_0362.svg"
            alt = "Shasta"
            width = {200}
            height = {50}
            priority
          />
        </div>

        <div className = {styles.description}>
          <p>
            Here are a couple of links to my socials. I will periodically update this page.
          </p>
        </div>

        <div className = {styles.grid}>
          <a
            href = "https://linkedin.com/in/tristan-cai-b89571267"
            className = {styles.card}
            target = "_blank"
            rel = "noopener noreferrer"
          >
            <h2 className = {inter.className}>
              Employment <span> -&gt; </span>
            </h2>
            <p className = {inter.className}>
              LinkedIn Profile
            </p>
          </a>
        </div>

        <div className = {styles.grid}>
          <a
            href = "https://last.fm/user/luckifier"
            className = {styles.card}
            target = "_blank"
            rel = "noopener noreferrer"
          >
            <h2 className = {inter.className}>
              LastFM <span> -&gt; </span>
            </h2>
            <p className = {inter.className}>
              音楽聞いています
            </p>
          </a>
        </div>

      </main>

  </>
  )
}