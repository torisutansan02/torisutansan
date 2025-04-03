import Post from './Post';
import { getAllPostIds, getPrebuiltPost } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllPostIds();
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;

  let postData;
  try {
    postData = getPrebuiltPost(id); // 🚀 Loads precompiled JSON
  } catch (err) {
    notFound(); // 🛑 Fallback for missing posts
  }

  return <Post postData={postData} />;
}
