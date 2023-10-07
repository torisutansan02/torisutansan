import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Link from 'next/link';

import { useAuth0 } from "@auth0/nextjs-auth0";

function Login() {
    const { user, error, isLoading } = useUser();
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
    return (
        <div>
        Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
        </div>
    );
    }
    else {
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
}

export default Login