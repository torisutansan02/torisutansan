//import { getAllPostIds, getPostData } from '../api/posts';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'

import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongo/index";

export default async (req, res) => {
   try {    
    const id = req.query.id;
    const client = await clientPromise;
    const db = client.db("nextjs-mongodb-demo");

    const testDataBase = db.collection("posts");
    const blogTest = await testDataBase.findOne({ _id:new ObjectId(id)});
    if(blogTest) {
        res.json(blogTest);
    } 
    else {
        res.status(404).json({message: "Movies not found"})
    } 
      } catch (e) {
       console.error(e);
       res.status(500).json({ message: "Internal server error" });  
   }
};


export function Post({ allPosts }) {
  return (
    <>
      <Navbar />
      <Sidebar></Sidebar>
        {allPosts.title}
      <br />
        {allPosts.id}
      <br />
        {allPosts.date}
      <Footer />
    </>
  );
}

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const postData = getPostData(params.id);
//   return {
//     props: {
//       postData,
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