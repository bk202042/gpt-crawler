export function formatAsMarkdown(data: Record<string, any>): string {
  const { title, url, html } = data;
  
  return `# ${title}

Source: ${url}

${html}

---
`;
}
