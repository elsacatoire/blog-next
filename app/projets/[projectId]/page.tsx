import getFormattedDate from "@/lib/getFormattedDate";
import { getProjectData, getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetadata({
	params,
}: { params: { projectId: string } }) {
	const projects = getSortedProjectsData();
	const { projectId } = params;

	const project = projects.find((project) => project.id === projectId);

	if (!project) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: project.title,
	};
}

export default async function Project({
	params,
}: { params: { projectId: string } }) {
	const projects = getSortedProjectsData();
	const { projectId } = params;
	console.log(projectId);

	if (!projects.find((project) => project.id === projectId)) notFound();

	const { title, date, contentHtml } = await getProjectData(projectId);

	const pubDate = getFormattedDate(date);

	return (
		<div className="mx-auto mb-10 mt-10 max-w-4xl text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
			<main className="markdown-content px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
				<h1 className="text-3xl mt-4 mb-0">{title}</h1>
				<p className="mt-0">{pubDate}</p>
				<article>
					<section dangerouslySetInnerHTML={{ __html: contentHtml }} />
					<p className="mb-8 mt-8 text-xl text-green-700 font-semibold">
						<Link href="/projets">← Retour aux projets</Link>
					</p>
				</article>
			</main>
		</div>
	);
}
