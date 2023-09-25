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
            <p> 
                Hello, my name is Tristan. Down below, you will find links to a couple of past
                projects. The entire purpose of this project is to demonstrate my ability in
                frontend and CSS. I am using Tailwind CSS to develop this website. In the future,
                I want to also implement user authentication and a database to turn this into a
                blog-like website.
            </p>

            <Link href = "https://rubbishradartristan.web.app" className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md"> Rubbish Radar </Link>

            <Link href = "https://torisutanproject.vercel.app/" className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md"> Biohack Project </Link>

            <Footer /> 
        </>
    );
}

export default About