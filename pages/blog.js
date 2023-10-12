import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

// import { getSortedPostsData } from '../lib/posts';
import { useEffect, useState } from 'react'

import { useUser } from '@auth0/nextjs-auth0';

import Link from 'next/link'

export default function Blog({ allPosts }) {
  const [loading, setLoading] = useState(false);
  const [state, setPostsState] = useState('test');

  useEffect(() => {
    setPostsState(allPosts);
  }, [allPosts]);
  
  let submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "My goal in life",
        content: "Try to be funny, I failed",
      }),
    });
    res = await res.json();
    setPostsState([state, res]);
    // setTitle("");
    // setContent("");
    setLoading(false);
  };

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        {/* <button onClick = {submitForm}> Test </button> */}
          <Navbar />
          <Sidebar></Sidebar>

          <h2 className = "heading"> Blog </h2>
          <ul>
              <li key={allPosts.title}>
                <Link href = {`/blog/${allPosts.title}`}> {allPosts.title} </Link>
                <br />
                  {allPosts.content}
                <br />
                  {/* {date} */}
                <br />
                <br />
              </li>
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

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export async function getServerSideProps({context}) {
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return {
    props: { allPosts },
  };
}