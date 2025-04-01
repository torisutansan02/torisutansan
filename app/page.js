import Head from 'next/head';
import Image from 'next/image'; // Import the Image component

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <>
      <Head>
        <title>torisutansan</title>
      </Head>

      <Navbar></Navbar>

      <Sidebar></Sidebar>
      <div className = "text">

          <h1 className = "heading">
            Who am I?
          </h1>

          <p className = "pretty">
            Hello, my name is Tristan. I graduated with a computer science degree
            in December of 2024. 
            <br/>
            <br/>
            I will post my projects, 
            and other activities on here. It is my personal objective to try to learn new things whenever I
            have the opportunity. 
            <br/>
            <br/>
            As such, I hope this website evolves with time.
          </p>

          <div className="md:block md:text-left text-center mt-8">
            <Image
              src="/images/tristancai2024.png"
              alt="Tristan Cai 2024"
              width={256}
              height={170}
              className="rounded-md inline-block"
              priority
            />
          </div>


          <h2 className = "heading">
            What is this?
          </h2>

          <p className = "pretty">
            I am going to use this to hone in on my front-end skills. I am hoping I get 
            better with CSS, HTML and JavaScript. 
            Back-end skills are also important. I
            am going to use user-authentication for server-side and client-side features.
            This way, I can add to my personal blog.
          </p>

          <h3 className = "heading">
            Purpose
          </h3>

          <p className = "pretty">
            Hopefully I can optimize my code and other features with this website. Most of 
            what I reference comes from NetNinja on Youtube. Alongside many other resources,
            like Stack Overflow.
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
            this, I am also going to use Auth0 for user authentication, and as a database. My
            personal blog serves as a way to healthily express myself.
          </p>

          <p className = "pretty">
            If you have any interest in contacting me, please click one of the links below.
            I am very happy to make friends with you, or perhaps connect with you on LinkedIn.
            Hopefully you find this interesting, or any of my other projects.
          </p>
        </div>
      <Footer />
  </>
  )
}