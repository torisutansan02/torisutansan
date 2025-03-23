import Post from './Post';
import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map(({ id }) => ({ id }));
}

export default async function BlogPostPage({params}) {
  const { id } = await params;

  const postData = await getPostData(id);
  return <Post postData={postData} />;
}