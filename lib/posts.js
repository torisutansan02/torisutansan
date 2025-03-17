import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import remarkImages from 'remark-images';
import rehypeImgSize from 'rehype-img-size';
import rehypeRaw from 'rehype-raw';

const postsDirectory = path.join(process.cwd(), 'blog');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use unified to process Markdown content
  const processedContent = await unified()
    .use(remarkParse) // Parse Markdown
    .use(remarkMath) // Enable LaTeX math
    .use(remarkGfm)
    .use(remarkImages) // Handles images in Markdown (move this up)
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert Markdown to HTML AST
    .use(rehypeRaw) // Allow raw HTML (must be right after remarkRehype)
    .use(rehypeImgSize, { dir: 'public', queryString: true }) // Add image sizes
    .use(rehypeHighlight) // Add syntax highlighting
    .use(rehypeKatex) // Render LaTeX math
    .use(rehypeStringify) // Convert HTML AST to string
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}