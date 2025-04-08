import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'blog');

function convertImgTagsToMarkdown(content) {
  return content.replace(/<img\s+[^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, (match, src, alt) => {
    return `![${alt}](${src})`;
  });
}

function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = convertImgTagsToMarkdown(content);

  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✅ Converted: ${path.basename(filePath)}`);
  }
}

function run() {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

  files.forEach(file => {
    const fullPath = path.join(blogDir, file);
    processMarkdownFile(fullPath);
  });

  console.log('\n🎉 All <img> tags converted to Markdown syntax.');
}

run();
