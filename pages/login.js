import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Link from 'next/link';

function Socials() {
    return (
        <>
            <Navbar />
            <Sidebar></Sidebar>
            
            <h1 className = "heading"> Login </h1> 

            <Link href="https://torisutan.org/api/auth/login"> Login </Link>

            <Footer />
        </>
    );
}

export default Socials