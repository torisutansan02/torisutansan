import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

function Socials() {
    return (
        <>
            <Navbar />
            <Sidebar></Sidebar>
            
            <h1 className = "heading"> Socials </h1> 

            <p className = "pretty">
                In this section, you will find my socials. Here,
                you can get in contact with me about various
                things. I recommend connecting with me on
                LinkedIn.
            </p>  
            
            <p className = "pretty">
                Please click any of the four boxes on top of the
                footer.
            </p>

            <Footer />
        </>
    );
}

export default Socials