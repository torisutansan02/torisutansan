import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'

function About() {
    return (
        <>
            <Navbar />

            <Sidebar></Sidebar>

            <h1> About Me </h1>  
            <p className = "pretty"> 
                Hello, my name is Tristan. Down below, you will find links to a couple of past
                projects. The entire purpose of this project is to demonstrate my ability in
                frontend and CSS. I am using Tailwind CSS to develop this website.
            </p>

            <p className = "pretty">
                My goal in life is to be a happier, more productive individual. I need to find
                fulfilling and cognitive activities to satisfy this. Therefore, you will often
                notive how expressive I am.
            </p>

            <p className = "pretty">
                Largely speaking, I try to stick with routines and habits I build on a daily
                basis. I need to have a routine, not a regiment. This is because I want to
                adjust for times where life becomes difficult.
            </p>

            <Link href = "https://rubbishradartristan.web.app" className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md grid w-40 items-center text-center content-center" target = "_blank"> Rubbish Radar </Link>

            <Link href = "https://torisutanproject.vercel.app/" className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md grid w-40 items-center text-center content-center" target = "_blank"> Biohack Project </Link>

            <Footer /> 
        </>
    );
}

export default About