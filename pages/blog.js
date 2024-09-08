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
          <div className = "text">
          <h2 className = "heading"> Blog </h2>
          
          <p className = "pretty"> 
            You can find links to my blog posts below. These are posts that revolve around my daily life.
            I find various things interesting so checking out my blog is a must! There are lots of things
            I do on a day-to-day basis. I am changing things up, and I plan on following a solid routine.
            Routines are essential for time management and ensuring I can finish tasks.
          </p>

          <p className = "pretty">
            The blogs below have a name with a particular topic. Each one from descending order is
            chronological. I am going to date each one of these blogs to give an idea of how frequently I post.
            This also gives you an idea of how much my life changes over time.
          </p>

          {allPostsData.map(({ id, date, title }) => (
            <p className = "visible" key={id}>
              <Link className="grid bg-zinc-700 hover:bg-gray-900 content-center text-center py-4 mt-10 rounded-sm text-white" href={`/blog/${id}`}>
                <span className="">{title}</span>
              </Link>
            <br />
            </p>
          ))}

          </div>

          <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <Sidebar />

        <div className = "text">

        <h1 className = "heading"> Blog </h1>

        <p className = "pretty"> 
          If you want to access blogs on this website,
          please log in. My blogs are journalistic in
          nature and I use them to document interests.
          I refer back to my blogs when I need to
          recollect memories.
        </p>

        <p className = "pretty">
          In particular, I use my blogs to talk about 
          the things I learn in my life. Sometimes these
          are ideas I familiarize myself with or concepts
          I self-teach. Else, I document the ideas I learn
          from school, books, et cetera.
        </p>

        <p className = "pretty">
          I might also cite books or other resources I use
          when writing these blogs. There might also be pages
          I add with class notes or otherwise important
          information I want to retain.
        </p>

        <p className = "pretty">
          Please click the Login section on the right sidebar.
          I think you may find some of my journaling
          interesting!
        </p>

        </div>
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