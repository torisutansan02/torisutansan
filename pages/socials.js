import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

function Socials() {
    return (
        <>
            <Navbar />
            <Sidebar></Sidebar>

            <div className = "text">
            
            <h1 className = "heading"> Socials </h1> 

            <p className = "pretty">
                In this section, you will find my socials. Here,
                you can get in contact with me about various
                things. I recommend connecting with me on
                LinkedIn. This is where you might find out a bit
                about my professional journey in computer science.
                I also list some of my past work experience in college.
                Connect with me and shoot a message if you have any
                questions.
            </p>  
            
            <p className = "pretty">
                Please click any of the four boxes below the
                footer. These are parts of my digital footprint.
                They also summarize the things I am interested in.
                My Instagram documents the things I do in my life.
                For instance, my trip to Japan in August of 2023.
                Or my trip to Shasta in April of 2023. These are landmark
                journeys and I plan on adding more for you to see.
            </p>

            </div>

            <Footer />
        </>
    );
}

export default Socials