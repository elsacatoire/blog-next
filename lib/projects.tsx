import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "projectposts");

export function getSortedProjectsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	const allProjectsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, "");

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		const projectPost: ProjectPost = {
			id,
			title: matterResult.data.title,
			date: matterResult.data.date,
			stack: matterResult.data.stack,
			image: matterResult.data.image,
		};

		// Combine the data with the id
		return projectPost;
	});
	// Sort posts by date
	return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
export async function getProjectData(id: string) {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);

	const contentHtml = processedContent.toString();

	const projectPostWithHTML: ProjectPost & { contentHtml: string } = {
		id,
		title: matterResult.data.title,
		date: matterResult.data.date,
		stack: matterResult.data.stack,
		contentHtml,
		image: matterResult.data.image,
	};

	// Combine the data with the id
	return projectPostWithHTML;
}
