import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'

function About() {
    return (
        <>
            <Navbar />

            <Sidebar></Sidebar>
            <div className = "text">

            <h1 className = "heading"> 
                About Me 
            </h1>  
            
            <p className = "pretty"> 
                My name is Tristan Cai. I identify as non-binary and I am okay with any pronouns.
                I pursue various projects at once. The entire purpose of this website is to document and
                demonstrate my skills. I use Tailwind CSS to develop the front-end of this website.
            </p>

            <p className = "pretty">
                A lifelong goal is to become a happier, more productive individual. Fulfillment comes
                naturally, untangling the vines of societal restriction. I feel happy as an expressive 
                person, with my life philosophy stemming from various media. Serial Experiments Lain,
                Evangelion, and Clannad.
            </p>

            <p className = "pretty">
                I stick with daily routines and habits. These rituals are mostly dietary and physical.
                Maximizing health and well-being gives me energy. Healthy diets, intense physical exercise,
                and cognition occur naturally. Streamlining these processes, but enhancing them through
                introspection.
            </p>

            <p className = "pretty">
                I separate my long-term and short-term goals. A short-term goal I have is to finish college
                and major in computer science with a possible minor in film. I want to become a polyglot,
                with fluency in Spanish, Japanese, and Mandarin. The advent of sciences, arts and creative
                expression are endless. As an anarchist, I envision a world of endless exploration.
            </p>

            <Link href = "https://rubbishradartristan.web.app" className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md flex w-40 text-center justify-center mx-auto text-white" target = "_blank"> Rubbish Radar </Link>

            <Link href = "https://torisutanproject.vercel.app/" className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md flex w-40 text-center justify-center mx-auto text-white" target = "_blank"> Biohack Project </Link>

            </div>
            <Footer /> 
        </>
    );
}

export default About