import Articles from "../components/Articles";
import MarkdownLoader from "../components/MarkdownLoader";

export default function PostsPage() {
	return (
		<>
			<div className="flex flex-col items-center gap-4 flex-wrap">
				<h1 className="text-center text-lg md:text-2xl font-bold text-gray-900">
					Parfois j&apos;écris,
				</h1>
				<MarkdownLoader filePath="/content/blog-content.md" />
			</div>
			<Articles articleType={"post"} />
		</>
	);
}
