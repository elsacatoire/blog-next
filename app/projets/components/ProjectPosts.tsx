import ListItemProject from "@/app/components/ListItemProjects";
import { getSortedProjectsData } from "@/lib/projects";

export default function ProjectPosts() {
	const posts = getSortedProjectsData();
	return (
		<section className="mx-auto">
			<div className="w-full grid lg:grid-cols-2 gap-3">
				{posts.map((post) => (
					<ListItemProject key={post.id} post={post} />
				))}
			</div>
		</section>
	);
}
