import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

function About() {
    return (
        <>
            <Navbar />

            <Sidebar></Sidebar>

            <h1> My about me </h1>  
            <p> Hello, my name is Tristan. </p>

            <Footer /> 
        </>
    );
}

export default About