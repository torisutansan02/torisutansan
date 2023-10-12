import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Link from 'next/link';

import { useUser } from '@auth0/nextjs-auth0';
// import connectMongo from '../utils/connectMongo';
// import Test from '../models/testModel';

// export const getServerSideProps = async () => {
//     require('dotenv').config();
//     try {
//       console.log('CONNECTING TO MONGO');
//       await connectMongo();
//       console.log('CONNECTED TO MONGO');
  
//       console.log('FETCHING DOCUMENTS');
//       const tests = await Test.find();
//       console.log('FETCHED DOCUMENTS');
  
//       return {
//         props: {
//           tests: JSON.parse(JSON.stringify(tests)),
//         },
//       };
//     } catch (error) {
//       console.log(error);
//       return {
//         notFound: true,
//       };
//     }
//   };

function Login() {
    const { user, error, isLoading } = useUser();
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    const createTest = async () => {
        const randomNum = Math.floor(Math.random() * 1000);
        const res = await fetch('/api/test/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: "Hi",
            email: "Hello",
          }),
        });
        const data = await res.json();
        console.log(data);
      };

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