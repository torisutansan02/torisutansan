import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkImages from 'remark-images';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypeSanitize from 'rehype-sanitize';
import { defaultSchema } from 'hast-util-sanitize';
import { normalizeId } from "./normalize.js";

const postsDirectory = path.join(process.cwd(), 'blog');
const prebuiltDirectory = path.join(process.cwd(), 'public', 'posts');

const schema = {
  ...defaultSchema,
  tagNames: [
    ...defaultSchema.tagNames,
    'span', 'div', 'math', 'mi', 'mo', 'mn', 'ms', 'mtext', 'mrow',
    'semantics', 'annotation', 'mfrac', 'msqrt',
  ],
  attributes: {
    ...defaultSchema.attributes,
    '*': [['className'], ['style']], // ✅ Allow className and style globally
    span: [['className'], ['style']],
    div: [['className'], ['style']],
    math: [['className']],
    mi: [['className']],
    mo: [['className']],
    mn: [['className']],
    ms: [['className']],
    mtext: [['className']],
    mrow: [['className']],
    semantics: [['className']],
    annotation: [['className']],
    mfrac: [['className']],
    msqrt: [['className']],
  },
};


// ✅ Recursively get all markdown file paths under blog/
function getAllMarkdownFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllMarkdownFiles(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      fileList.push(fullPath);
    }
  }

  return fileList;
}

export function getAllPostIds() {
  return getAllMarkdownFiles(postsDirectory).map((full) => {
    const rel = path.relative(postsDirectory, full);
    const rawId = rel.replace(/\.md$/, "").replace(/\\/g, "/");
    return { id: rawId }; // keep nested paths here
  });
}

export function getSortedPostsData() {
  return getAllMarkdownFiles(postsDirectory)
    .map((fullPath) => {
      const relative = path.relative(postsDirectory, fullPath);
      const id = relative.replace(/\.md$/, "").replace(/\\/g, "/"); // <-- nested ID preserved

      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        id, // <-- nested slug (slidingwindow/permutationinstring)
        title: data.title || id,
        date: data.date || "Unknown",
        category: data.category || null,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
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
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeHighlight)
    .use(rehypeKatex)
    .use(rehypeSanitize, schema)
    .use(rehypeStringify)
    .process(matterResult.content);
  console.timeEnd(`⏱ remark:${safeId}`);

  return {
    id: safeId,
    contentHtml: processedContent.toString(),
    ...matterResult.data,
    categories: matterResult.data.categories || [],
  };
}

export function getPrebuiltPost(id) {
  const safe = id;
  const file = path.join(prebuiltDirectory, `${safe}.json`);
  return JSON.parse(fs.readFileSync(file, "utf8"));
}
