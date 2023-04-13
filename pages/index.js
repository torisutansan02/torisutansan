import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>torisutansan</title>
      </Head>

      <main className = {styles.main}>

      <div className = {styles.description}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/socials">Socials</Link>
          </li>
        </ul>
      </div>

        <div className = {styles.description}>
          <p>
            torisutansan is a personal project I am working on.
          </p>
        </div>

        <div className = {styles.description}>
          <a>
            Here are a couple of links to my socials. I will periodically update this page.
          </a>
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

          <a
            href = "https://rateyourmusic.com/~torisutan"
            className = {styles.card}
            target = "_blank"
            rel = "noopener noreferrer"
          >
            <h2 className = {inter.className}>
              RYM <span> -&gt; </span>
            </h2>
            <p className = {inter.className}>
              RYM Profile
            </p>
          </a>

          <a
            href = "https://instagram.com/torisutansan?igshid=ZDdkNTZiNTM="
            className = {styles.card}
            target = "_blank"
            rel = "noopener noreferrer"
          >
            <h2 className = {inter.className}>
              IG <span> -&gt; </span>
            </h2>
            <p className = {inter.className}>
              Instagram Profile
            </p>
          </a>
        </div>

        <div className = {styles.description}>
          <div className = "logo">
            <gmbbg>
              <Image
                src = "/images/IMG_0390.png" 
                alt = "" 
                width = {300} 
                height = {200} 
              />
            </gmbbg>
          </div>
        </div>
      </main>
  </>
  )
}