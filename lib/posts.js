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

// ✅ Custom sanitize schema to preserve highlight.js + KaTeX
const schema = {
  ...defaultSchema,
  tagNames: [
    ...defaultSchema.tagNames,
    'math', 'mi', 'mo', 'mn', 'ms', 'mtext', 'mrow',
    'semantics', 'annotation', 'mfrac', 'msqrt'
  ],
  attributes: {
    ...defaultSchema.attributes,
    code: [
      ...(defaultSchema.attributes.code || []),
      ['className'],
    ],
    span: [
      ...(defaultSchema.attributes.span || []),
      ['className'],
    ],
    div: [
      ...(defaultSchema.attributes.div || []),
      ['className'],
    ],
    img: [
      ...(defaultSchema.attributes.img || []),
      ['style'],
    ],
    math: [], mi: [], mo: [], mn: [], ms: [], mtext: [], mrow: [],
    semantics: [], annotation: [], mfrac: [], msqrt: [],
  }
};

// ✅ Returns all post metadata (no content), sorted by date
export function getSortedPostsData() {
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

// ✅ Returns a flat list of post IDs for App Router use in generateStaticParams
export function getAllPostIds() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ''),
  }));
}

// ✅ In-memory cache to speed up repeated loads
const htmlCache = new Map();

// ✅ Loads and processes a single markdown post
export async function getPostData(id) {
  if (htmlCache.has(id)) {
    return htmlCache.get(id);
  }

  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  console.time(`⏱ remark:${id}`);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkImages)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize, schema)
    .use(rehypeImgSize, { dir: 'public', queryString: true })
    .use(rehypeHighlight)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(matterResult.content);

  console.timeEnd(`⏱ remark:${id}`);

  const decodedHtml = he.decode(processedContent.toString());

  const postData = {
    id,
    contentHtml: decodedHtml,
    ...matterResult.data,
    categories: matterResult.data.categories || [],
  };

  htmlCache.set(id, postData); // ✅ Save to cache
  return postData;
}
