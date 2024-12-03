import MarkdownLoader from "@/app/components/MarkdownLoader";
import { getArticleData, getSortedArticlesData } from "@/lib/getArticles";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { postId: string } }) {
	const posts = getSortedArticlesData("project");
	const { postId } = params;

	const post = posts.find((post) => post.id === postId);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: post.title,
	};
}

export function generateStaticParams() {
	const posts = getSortedArticlesData("project");
	return posts.map((post) => ({
		postId: post.id,
	}));
}

export default async function Project({
	params,
}: { params: { projectId: string } }) {
	const projects = getSortedArticlesData("project");
	const { projectId } = params;

	if (!projects.find((project) => project.id === projectId)) notFound();

	const { title, date } = await getArticleData("project", projectId);
	const pubDate = getFormattedDate(date);

	return (
		<div className="flex flex-col gap-4 md:gap-8 max-w-4xl">
						<div className="text-xl text-green-700 font-semibold">
				<Link href="/projets">← Retour aux projets</Link>
			</div>
			<h1 className="text-3xl">{title}</h1>
			<p>{pubDate}</p>
			<MarkdownLoader filePath={`/content/project/${projectId}.md`} />
			<div className="text-xl text-green-700 font-semibold">
				<Link href="/projets">← Retour aux projets</Link>
			</div>
		</div>
	);
}
