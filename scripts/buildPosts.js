import fs from 'fs';
import path from 'path';
import { getPostData, getAllPostIds } from '../lib/posts.js';

const outputDir = path.join(process.cwd(), 'public', 'posts');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function buildAllPosts() {
  const posts = getAllPostIds();

  await Promise.all(
    posts.map(async ({ id }) => {
      const post = await getPostData(id);
      const outPath = path.join(outputDir, `${id}.json`);
      fs.writeFileSync(outPath, JSON.stringify(post, null, 2));
      console.log(`✅ Built: ${id}`);
    })
  );
}

console.time("⏱ Built all posts");
await buildAllPosts();
console.timeEnd("⏱ Built all posts");
