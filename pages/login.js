import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Link from 'next/link';

import { useUser } from '@auth0/nextjs-auth0';

function Login() {
    const { user, error, isLoading } = useUser();
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
    return (
        <>
            <Navbar/>
            <Sidebar></Sidebar>

            <h1 className = "heading"> Yay </h1>
            <p classname = "pretty"> Welcome {user.name}! <Link href="/api/auth/logout"> Logout </Link> </p>
            
            <Footer/>
        </>
    );
    }
    else {
        return (
            <>
                <Navbar />
                <Sidebar></Sidebar>
                
                <h1 className = "heading"> Login </h1> 

                <Link className = "pretty" href="api/auth/login"> Login </Link>

                <Footer />
            </>
        );
    }
}

export default Login