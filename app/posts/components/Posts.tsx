import ListItem from "@/app/components/ListItem";
import { getSortedContentData } from "@/lib/posts";

export default function Posts() {
	const posts = getSortedContentData("post");
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
