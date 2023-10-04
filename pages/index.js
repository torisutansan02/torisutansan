import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { useUser } from '@auth0/nextjs-auth0';

import Link from 'next/link';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    // const { user, error, isLoading } = useUser();
  
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;
  
    // if (user) {
    //   return (
    //     <div>
    //       Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
    //     </div>
    //   );
    // }

  return (
    <>
      <Head>
        <title>torisutansan</title>
      </Head>

      <Navbar></Navbar>

      <Sidebar></Sidebar>

          <h1 className = "heading">
            Who am I?
          </h1>

          <p className = "pretty">
            Hello, my name is Tristan. I am a fourth year computer science student. I will post my projects, 
            and other activities on here. It is my personal objective to try to learn new things whenever I
            have the opportunity. As such, I hope this website evolves with time.
          </p>

          <h2 className = "heading">
            What is this?
          </h2>

          <p className = "pretty">
            I am going to use this to hone in on my front-end skills. I am hoping I get 
            better with CSS, html and JavaScript.
          </p>

          <h3 className = "heading">
            Purpose
          </h3>

          <p className = "pretty">
            Hopefully I can optimize my code and other features with this website. Most of 
            what I reference comes from NetNinja on Youtube.
          </p>

          <h3 className = "heading">
            Other Activities
          </h3>

          <p className = "pretty">
            I will create a sidebar where you can navigate to some of the things I am doing. 
            The purpose of this sidebar is to show you my various works or projects.
            It might also contain some of the hobbies or other things I find of interest.
          </p>

          <p className = "pretty">
            Other than that, I hope this becomes an experiment I can have a bit of fun with. 
            I am using HTML, CSS, JavaScript, Tailwind primarily for this project. Alongside
            this, I am also going to use Auth0 as a database and user authentication. My
            personal blog serves as a way to healthily express myself.
          </p>

          <p className = "pretty">
            If you have any interest in contacting me, please click one of the links below.
            I am very happy to make friends with you, or perhaps connect with you on LinkedIn.
            Hopefully you find this interesting, or any of my other projects.
          </p>
      <Footer />
  </>
  )
}