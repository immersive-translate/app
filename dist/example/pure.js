function main() {
  const html = DOMPurify.sanitize("<p><code>alert(1)</code></p>");
  console.log(html);
}

main();
