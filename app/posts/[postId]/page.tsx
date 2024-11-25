import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export function generateMetadata({ params }: { params: { postId: string } }) {
	const posts = getSortedPostsData();
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
	const posts = getSortedPostsData();
	return posts.map((post) => ({
		postId: post.id,
	}));
}

export default async function Post({ params }: { params: { postId: string } }) {
	const posts = getSortedPostsData();
	const { postId } = params;

	if (!posts.find((post) => post.id === postId)) notFound();

	const { title, date, contentHtml } = await getPostData(postId);

	const pubDate = getFormattedDate(date);

	return (
		<div className="mx-auto mb-10 mt-10 max-w-4xl text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<div className="max-w-3xl mx-auto">
				<main className="markdown-content px-6 prose prose-xl prose-slate dark:prose-invert mx-auto mb-30">
					<h1 className="text-3xl mt-8 mb-8">{title}</h1>
					<p className="mt-0 mb-4">{pubDate}</p>
					<article>
						<ReactMarkdown>{contentHtml}</ReactMarkdown>
						<p className="mb-8 mt-8 text-xl font-semibold text-green-700">
							<Link href="/posts">← Retour aux articles</Link>
						</p>
					</article>
				</main>
			</div>
		</div>
	);
}
