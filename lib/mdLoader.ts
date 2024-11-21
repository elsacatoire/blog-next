import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getMarkdownContent(filename: string) {
  const filePath = path.join(process.cwd(), "content", filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents); 
  return content;
}
