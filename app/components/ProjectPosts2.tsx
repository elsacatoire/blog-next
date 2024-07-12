import { getSortedProjectsData } from "@/lib/projects"
import ListItemProject from "./ListItemProjects"
import Link from "next/link"

export default function ProjectPosts2() {
	const posts = getSortedProjectsData().slice(0, 2)
	return (
		<section className="mt-6 mx-auto max-w-2xl">
			<h2 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Derniers projets</h2>

			<div className="w-full grid lg:grid-cols-2 gap-3">
				{posts.map(post => (
					<ListItemProject key={post.id} post={post} />
				))}
			</div>
			<Link className="underline text-green-700" href="/projets">Les projets  &rarr;</Link>
		</section>
	)
}