import Link from "next/link";
import Posts from "../components/Posts";
import MarkdownLoader from "../components/MarkdownLoader";

export default function PostsPage() {
	return (
		<>
			<div className="flex flex-col md:flex-row md:space-x-8 items-start">
				<div className="md:w-2/3 md:order-1s mx-auto">
					<h1 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Parfois j&apos;écris,
					</h1>
					<MarkdownLoader filePath="/content/blog-content.md" />
				</div>
			</div>
			<div className="justify-center flex flex-wrap">
				<Posts />
			</div>
		</>
	);
}
