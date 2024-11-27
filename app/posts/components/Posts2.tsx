import ListItem from "@/app/components/ListItem";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

type Posts2Props = {
	sliceCount?: number;
	title?: string;
};

export default function Posts2({ sliceCount, title }: Posts2Props) {
	const posts = getSortedPostsData().slice(0, sliceCount);
	return (
		<section className="mt-6 mx-auto max-w-2xl">
			<h1 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h1>
			<ul className="w-full">
				{posts.map((post) => (
					<ListItem key={post.id} post={post} />
				))}
			</ul>
			<Link className="underline text-green-700" href="/posts">
				Les articles &rarr;
			</Link>
		</section>
	);
}
