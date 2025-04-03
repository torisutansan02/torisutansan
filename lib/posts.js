import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkImages from 'remark-images';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeImgSize from 'rehype-img-size';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypeSanitize from 'rehype-sanitize';
import { defaultSchema } from 'hast-util-sanitize';
import he from 'he';

const postsDirectory = path.join(process.cwd(), 'blog');
const prebuiltDirectory = path.join(process.cwd(), 'public', 'posts');

// ✅ Custom sanitize schema to preserve highlight.js + KaTeX
const schema = {
  ...defaultSchema,
  tagNames: [
    ...defaultSchema.tagNames,
    'math', 'mi', 'mo', 'mn', 'ms', 'mtext', 'mrow',
    'semantics', 'annotation', 'mfrac', 'msqrt',
  ],
  attributes: {
    ...defaultSchema.attributes,
    code: [['className']],
    span: [['className']],
    div: [['className']],
    img: [['src'], ['alt'], ['width'], ['height'], ['style'], ['title']],
    math: [], mi: [], mo: [], mn: [], ms: [], mtext: [],
    mrow: [], semantics: [], annotation: [], mfrac: [], msqrt: [],
  },
};

// ✅ Returns all post metadata (no content), sorted by date (newest first)
export async function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
      categories: matterResult.data.categories || [],
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// ✅ Returns a flat list of post IDs for generateStaticParams()
export function getAllPostIds() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ''),
  }));
}

// ✅ Full markdown processor for build-time use only
export async function getPostData(id) {
  const safeId = String(id);
  const fullPath = path.join(postsDirectory, `${safeId}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`❌ File does not exist: ${fullPath}`);
  }

  console.log(`🧪 Reading: ${fullPath}`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  if (!matterResult.data || !matterResult.content) {
    throw new Error(`⚠️ Invalid frontmatter or empty content in: ${safeId}.md`);
  }

  console.time(`⏱ remark:${safeId}`);
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkImages)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeImgSize, { dir: 'public' })
    .use(rehypeSanitize, schema)
    .use(rehypeHighlight)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(matterResult.content);
  console.timeEnd(`⏱ remark:${safeId}`);

  return {
    id: safeId,
    contentHtml: he.decode(processedContent.toString()),
    ...matterResult.data,
    categories: matterResult.data.categories || [],
  };
}


// ✅ Runtime-friendly loader for prebuilt JSON posts
export function getPrebuiltPost(id) {
  const filePath = path.join(prebuiltDirectory, `${id}.json`);
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}
