// app/blog/[id]/page.js
import Post from './Post';
import { getAllPostIds, getPrebuiltPost } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllPostIds();
}

export const dynamic = 'force-static'; // ✅ Ensures static generation at build time

export default async function BlogPostPage({ params }) {
  const { id } = await params; // ❌ No need to `await` here — params is not a promise

  let postData;
  try {
    postData = await getPrebuiltPost(id); // ✅ Loads precompiled JSON
  } catch (err) {
    return notFound(); // ✅ Needs a `return` or it will continue rendering
  }

  return <Post postData={postData} />;
}
