import ListItem from "@/app/components/ListItem";
import { getSortedArticlesData } from "@/lib/getArticles";

export default function ProjectPosts() {
	const posts = getSortedArticlesData("post");
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
