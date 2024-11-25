import getFormattedDate from "@/lib/getFormattedDate";
import { getProjectData, getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default async function Project({
	params,
}: { params: { projectId: string } }) {
	const projects = getSortedProjectsData();
	const { projectId } = params;

	if (!projects.find((project) => project.id === projectId)) notFound();

	const { title, date, contentHtml } = await getProjectData(projectId);
	const pubDate = getFormattedDate(date);

	return (
		<div className="max-w-4xl">
			<main className="markdown-content px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
				<h1 className="text-3xl mt-4 mb-0">{title}</h1>
				<p className="mt-0">{pubDate}</p>
				<ReactMarkdown>{contentHtml}</ReactMarkdown>
				<p className="mb-8 mt-8 text-xl text-green-700 font-semibold">
					<Link href="/projets">← Retour aux projets</Link>
				</p>
			</main>
		</div>
	);
}
