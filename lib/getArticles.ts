import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDirectory = (type: "post" | "project") =>
	path.join(process.cwd(), `public/content/${type}`);

export function getSortedArticlesData(type: "post" | "project") {
	const directory = contentDirectory(type);
	const fileNames = fs.readdirSync(directory);

	const allContentData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");

		const fullPath = path.join(directory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(fileContents);

		return {
			id,
			title: data.title || "Titre inconnu",
			date: data.date || "Date inconnue",
			stack: data.stack || null,
			image: data.image || null,
		};
	});

	return allContentData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleData(type: "post" | "project", id: string) {
	const directory = contentDirectory(type);
	const fullPath = path.join(directory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return {
		id,
		title: data.title || "Titre inconnu",
		date: data.date || "Date inconnue",
		stack: data.stack || null,
		image: data.image || null,
		content,
	};
}
