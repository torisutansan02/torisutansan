// scripts/testPostIds.js
import { getAllPostIds } from '../lib/posts.js'; // adjust path as needed

try {
  const ids = getAllPostIds();
  console.log('🧪 All post IDs:', ids);
} catch (err) {
  console.error('❌ Error reading post IDs:', err.message);
}
