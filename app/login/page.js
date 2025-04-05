"use client";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import { useUser } from "@auth0/nextjs-auth0";

function Login() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        return (
            <>
                <Navbar />
                <Sidebar />
                <div className="text">
                    <h1 className="heading"> Hi {user.name}! </h1>
                    <p className="pretty">
                        Welcome! You can now access my personal blogs to find out some interesting things I do in my free time. My blogs can be interesting or boring. Sometimes I talk about my diet, or schoolwork. Or sometimes I go on hikes or watch anime, movies! I like to listen to lots of music!
                    </p>
                    <p className="pretty">
                        On the sidebar, please click the Blog button. You can access my blogs where I discuss various habits in my life. My interests lie in self-teaching myself various different concepts. I may also talk about my diet, exercises, or various different activities. I utilize dynamic routing, following a YYYYMMDD format to route to particular entries.
                    </p>
                    <a href="/auth/logout" className="bg-zinc-700 hover:bg-gray-900 p-4 m-4 rounded-md flex w-40 text-center justify-center mx-auto text-white"> Logout </a>
                </div>
                <Footer />
            </>
        );
    }

    // If user is not logged in, show the login page
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="text">
                <h1 className="heading"> Login </h1>
                <p className="pretty">
                    Please click the button below to login. Logging in to my website allows you to access my personal blogs.
                    To learn more about my workflow and processes, you need to have authorization. For those that have interest in learning more about the things I do in my day-to-day life.
                </p>
                <p className="pretty">
                    The login button is below these paragraphs. I am open to talking to you so please do not hesitate to reach out. The best way to reach out to me is through Instagram or connecting on LinkedIn. If you have any questions regarding this project, these are ways to reach out. I am more than happy to make friends with new people.
                </p>
                <p className="pretty">
                    I also love music. So I may talk in length about albums I like. I use RateYourMusic and LastFM to document my listening journey. You can add me on both if this interests you.
                </p>
                <a href="/login" className="bg-zinc-700 hover:bg-gray-900 p-4 m-4 rounded-md flex w-40 text-center justify-center mx-auto text-white"> Login </a>
            </div>
            <Footer />
        </>
    );
}

export default Login;
