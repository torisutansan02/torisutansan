import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'blog');

// Markdown image regex: ![alt](src)
const markdownImgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;

function convertMarkdownImgToHtml(content) {
  return content.replace(markdownImgRegex, (_, alt, src) => {
    return `<img src="${src}" alt="${alt}" style="width: 100%; height: auto;" />`;
  });
}

function processMarkdownFiles() {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

  files.forEach((file) => {
    const filePath = path.join(postsDir, file);
    const original = fs.readFileSync(filePath, 'utf8');
    const updated = convertMarkdownImgToHtml(original);

    if (original !== updated) {
      fs.writeFileSync(filePath, updated);
      console.log(`🔄 Converted markdown images to HTML in: ${file}`);
    } else {
      console.log(`✅ No markdown images found in: ${file}`);
    }
  });
}

processMarkdownFiles();
