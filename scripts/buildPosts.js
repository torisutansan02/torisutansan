import fs from 'fs';
import path from 'path';
import { getPostData, getAllPostIds } from '../lib/posts.js';

const outputDir = path.join(process.cwd(), 'public', 'posts');

// 🔥 Recursively delete everything in public/posts/
function clearDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  fs.readdirSync(dirPath).forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      clearDirectory(fullPath);
      fs.rmdirSync(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  });
}

// 🛠 Ensure the parent directory exists for a file
function ensureDirExists(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function buildAllPosts() {
  // Clean stale files
  clearDirectory(outputDir);
  fs.mkdirSync(outputDir, { recursive: true });

  const posts = getAllPostIds();

  await Promise.all(
    posts.map(async ({ id }) => {
      const post = await getPostData(id);
      const outPath = path.join(outputDir, `${id}.json`);
      ensureDirExists(outPath);
      fs.writeFileSync(outPath, JSON.stringify(post, null, 2));
      console.log(`✅ Built: ${id}`);
    })
  );
}

console.time('⏱ Built all posts');
await buildAllPosts();
console.timeEnd('⏱ Built all posts');
