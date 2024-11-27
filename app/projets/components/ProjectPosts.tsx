import ListItem from "@/app/components/ListItem";
import { getSortedProjectsData } from "@/lib/projects";

export default function ProjectPosts() {
	const posts = getSortedProjectsData();
	return (
		<section className="mx-auto">
			<div className="w-full grid lg:grid-cols-2 gap-3">
				{posts.map((post) => (
					<ListItem key={post.id} post={post} type={"project"} />
				))}
			</div>
		</section>
	);
}
