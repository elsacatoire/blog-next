import ListItem from "@/app/components/ListItem";
import { getSortedArticlesData } from "@/lib/getArticles";

export default function Posts() {
	const posts = getSortedArticlesData("post");
	return (
		<section className="mt-10 mx-auto">
			<ul className="w-full grid lg:grid-cols-2 gap-3">
				{posts.map((post) => (
					<ListItem key={post.id} post={post} type={"post"} />
				))}
			</ul>
		</section>
	);
}
