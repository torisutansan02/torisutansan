import Post from './Post';
import { getAllPostIds, getPrebuiltPost } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllPostIds().map(({ id }) => ({
    slug: id.split('/'), // Support nested paths like personal/firstpost
  }));
}

export const dynamic = 'force-static'; // ✅ Static generation at build time

export default async function BlogPostPage({ params }) {
  const awaitParams = await params;
  const id = awaitParams.slug.join('/'); // ✅ No `await` here — params is just an object

  let postData;
  try {
    postData = await getPrebuiltPost(id); // ✅ Prebuilt JSON from public/posts/*
  } catch (err) {
    return notFound(); // ✅ 404 if post doesn’t exist
  }

  return <Post postData={postData} />;
}
