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

            <p className = "pretty"> 
                Welcome {user.name}! You can now access my
                personal blogs to find out some interesting
                things I do on my free time.
            </p>

            <Link href = "/api/auth/logout" className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md flex w-40 text-center justify-center mx-auto text-white"> Logout </Link>

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

                <Link href = "/api/auth/login" className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md flex w-40 text-center justify-center mx-auto text-white"> Login </Link>

                <Footer />
            </>
        );
    }
}

export default Login