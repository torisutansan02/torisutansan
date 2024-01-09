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
                things I do in my free time. My blogs can be 
                interesting or boring. Sometimes I talk about my
                diet, or schoolwork. Or sometimes I go on hikes or
                watch anime, movies! Listen to music!
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

                <p className = "pretty">
                  Please click the button below to login. Logging in to my website allows you to access my personal blogs.
                  To learn more about my work flow and processes, you need to have authorization. For those that have 
                  interest in learning more about the things I do in my day to day life.
                </p>

                <p className = "pretty">
                  The login button is below these paragraphs. I am open to talking to you so please do not hesitate to
                  reach out. The best way to reach out to me is through Instagram or connecting on LinkedIn. If you have
                  any questions regarding this project, these are ways to reach out. I am more than happy to make friends
                  with new people.
                </p>

                <p className = "pretty">
                  I also love music. So I may talk in length about albums I like. I use RateYourMusic and LastFM to
                  document my listening journey. You can add me on both if this interests you.
                </p>

                <Link href = "/api/auth/login" className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md flex w-40 text-center justify-center mx-auto text-white"> Login </Link>

                <Footer />
            </>
        );
    }
}

export default Login