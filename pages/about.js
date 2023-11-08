import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'

function About() {
    return (
        <>
            <Navbar />

            <Sidebar></Sidebar>

            <h1 className = "heading"> About Me </h1>  
            <p className = "pretty"> 
                My name is Tristan Cai. I identify as non-binary and my pronouns are they/they/theirs.
                I like to work on various projects. The entire purpose of this website is to prove and
                demonstrate my skills. I am using Tailwind CSS to develop the front-end of this website.
            </p>

            <p className = "pretty">
                My goal in life is to be a happier, more productive individual. I find fulfilling 
                activities to spend thinking about these days. Naturally, I feel happy as an 
                expressive person.
            </p>

            <p className = "pretty">
                I try to stick with daily routines and habits. These are mostly dietary and ritualistic.
                These activities promote health and well-being. Healthy diets, intense physical exercise,
                and thinking occur naturally. I'm streamlining these processes and enhancing my creative
                output.
            </p>

            <Link href = "https://rubbishradartristan.web.app" className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md flex w-40 text-center justify-center mx-auto text-white" target = "_blank"> Rubbish Radar </Link>

            <Link href = "https://torisutanproject.vercel.app/" className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md flex w-40 text-center justify-center mx-auto text-white" target = "_blank"> Biohack Project </Link>

            <Footer /> 
        </>
    );
}

export default About