// components/MarkdownRenderer.jsx
"use client";

import React from "react";

const MarkdownRenderer = React.memo(function MarkdownRenderer({ html }) {
  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
});

export default MarkdownRenderer;
