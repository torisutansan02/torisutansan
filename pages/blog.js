import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

export default function Blog({ allPostsData }) {
  const { user, error, isLoading } = useUser();

  if (user) {
    return (
      <>
          <Navbar />
          <Sidebar></Sidebar>
          <h2 className = "heading"> Blog </h2>
          
          <p className = "pretty"> 
            Below, you can find links to my blog posts. These are posts that revolve around my daily life.
            I find various things interesting so checking out my blog is a must! There are lots of things
            I do on a day to day basis and sometimes it's consistent. But I like to change it up a bit as well!
          </p>

          {allPostsData.map(({ id, date, title }) => (
            <p className = "visible" key={id}>
              <Link className = "bg-zinc-700 hover:bg-gray-900 p-2 m-2 rounded-md text-white" href={`/blog/${id}`}>{title}</Link>
            <br />
            </p>
          ))}

          <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <Sidebar />

        <h1 className = "heading"> Blog </h1>
        <p> 
          If you want to access blogs on this webste,
          please log in.
        </p>
        <Footer />
      </>
    )
  }
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}