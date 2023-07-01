import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>torisutansan</title>
      </Head>

      <Navbar></Navbar>

          <h1>
            Who am I?
          </h1>

          <p>
            Hello, my name is Tristan. I am a fourth year computer science student.
          </p>

          <p>
            I post my work and other fun side projects on this website.
          </p>

          <h2>
            What even is this?
          </h2>

          <p>
            I am going to use this to hone in on my front-end skills. I am hoping I get better with CSS, html and JavaScript.
          </p>

          <h3>
            Purpose
          </h3>

          <p>
            Hopefully I can optimize my code and other features with this website. Most of what I reference comes from NetNinja on Youtube.
          </p>

          <h3>
            Other Activities
          </h3>

          <p>
            I will create a sidebar where you can navigate to some of the things I am doing. 
            The purpose of this sidebar is to show you my various works or projects.
            It might also contain some of the hobbies or other things I find of interest.
          </p>

          <p>
            Other than that, I hope this becomes an experiment I can have a bit of fun with. 
            I am using HTML, CSS, JavaScript, Tailwind primarily for this project.
          </p>

          <p>
            Please click some of the links below :3
          </p>

        <main>
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
        </main>
      <Footer />
  </>
  )
}