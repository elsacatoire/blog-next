import ListItem from "@/app/components/ListItem";
import { getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";

export default function ProjectPosts2() {
	const posts = getSortedProjectsData().slice(0, 2);
	return (
		<section className="mt-6 mx-auto max-w-2xl">
			<h1 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				Derniers projets
			</h1>

			<div className="flex flex-col">
				{posts.map((post) => (
					<ListItem key={post.id} post={post} type={"project"} />
				))}
			</div>
			<Link className="underline text-green-700" href="/projets">
				Les projets &rarr;
			</Link>
		</section>
	);
}
