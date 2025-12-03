// lib/normalize.js
export function normalizeId(id = "") {
  return String(id).replace(/\//g, "-").trim();
}
