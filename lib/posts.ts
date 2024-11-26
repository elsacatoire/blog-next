import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "public/content/blog");

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file to get metadata
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
            id,
            title: data.title || "Titre inconnu",
            date: data.date || "Date inconnue",
            image: data.image || "",
        }
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(postId: string) {
	const fullPath = path.join(postsDirectory, `${postId}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return {
		id: postId,
		title: data.title || "Titre inconnu",
		date: data.date || "Date inconnue",
		content,
	};
}
