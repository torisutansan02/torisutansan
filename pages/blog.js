import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { getSortedPostsData } from '../lib/posts';

import { useUser } from '@auth0/nextjs-auth0';

import Link from 'next/link'

export default function Blog({ allPostsData }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
          <Navbar />
          <Sidebar></Sidebar>
          <h2 className = "heading"> Blog </h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href = {`/blog/${id}`}> {title} </Link>
                <br />
                {id}
                <br />
                {date}
                <br />
                <br />
              </li>
            ))}
          </ul>
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