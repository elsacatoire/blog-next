import MarkdownLoader from "@/app/components/MarkdownLoader";
import { getArticleData, getSortedArticlesData } from "@/lib/getArticles";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { postId: string } }) {
	const posts = getSortedArticlesData("post");
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
	const posts = getSortedArticlesData("post");
	return posts.map((post) => ({
		postId: post.id,
	}));
}

export default async function Post({ params }: { params: { postId: string } }) {
	const posts = getSortedArticlesData("post");
	const { postId } = params;

	if (!posts.find((post) => post.id === postId)) notFound();

	const { title, date } = await getArticleData("post", postId);

	const pubDate = getFormattedDate(date);

	return (
		<div className="max-w-3xl mx-auto">
			<Link href="/posts">← Retour</Link>

			<h1 className="text-3xl mt-8 mb-8">{title}</h1>
			<p className="mt-0 mb-4">{pubDate}</p>
			<article>
				<MarkdownLoader filePath={`/content/post/${postId}.md`} />
				<p className="mb-8 mt-8 text-xl font-semibold text-green-700">
					<Link href="/posts">← Retour</Link>
				</p>
			</article>
		</div>
	);
}
