import Post from './Post';
import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPostIds(); // returns [{ id: 'slug1' }, ...]
  return posts.map(({ id }) => ({ id }));
}

// ✅ This works 100% in Next.js 15 App Router
export default async function BlogPostPage({params}) {
  const { id } = await params;

  const postData = await getPostData(id);
  return <Post postData={postData} />;
}