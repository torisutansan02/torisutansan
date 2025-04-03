import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'blog');
const publicDir = path.join(process.cwd(), 'public');

const imageTagRegex = /<img\s+[^>]*src=["']([^"']+)["']/g;

function getAllMarkdownFiles() {
  return fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));
}

function checkImagesInFile(filename) {
  const fullPath = path.join(postsDir, filename);
  const content = fs.readFileSync(fullPath, 'utf8');

  const missing = [];
  const found = [];

  let match;
  while ((match = imageTagRegex.exec(content)) !== null) {
    const src = match[1];
    const publicPath = path.join(publicDir, src);

    if (!fs.existsSync(publicPath)) {
      missing.push(src);
    } else {
      found.push(src);
    }
  }

  return { filename, missing, found };
}

function main() {
  console.log('🔍 Checking for missing <img> assets in /public...\n');

  const markdownFiles = getAllMarkdownFiles();
  let totalMissing = 0;

  for (const file of markdownFiles) {
    const { filename, missing } = checkImagesInFile(file);

    if (missing.length > 0) {
      console.log(`❌ ${filename} is missing the following images:`);
      missing.forEach((src) => console.log(`   - ${src}`));
      totalMissing += missing.length;
    }
  }

  if (totalMissing === 0) {
    console.log('✅ All <img src="..."> references in Markdown files point to existing files in /public.');
  } else {
    console.log(`⚠️ Total missing images: ${totalMissing}`);
  }
}

main();
