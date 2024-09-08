import React from 'react';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS
import '../blog/katex-custom.css'; // Import custom KaTeX CSS

export default function Post({ postData }) {
  return (
    <>
      <Navbar />
      <Sidebar></Sidebar>
      <div className = "text">
      <div className = "pretty">
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}