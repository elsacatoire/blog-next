import ListItem from "@/app/components/ListItem";
import { getSortedArticlesData } from "@/lib/getArticles";

type ArticlesProps = {
	articleType: "post" | "project";
	limit?: number | undefined;
};

export default function Articles({ articleType, limit }: ArticlesProps) {
	const articles = getSortedArticlesData(articleType);

	if (limit) {
		articles.slice(0, limit);
	}

	return (
		<section className="mt-10 mx-auto">
			<ul className="w-full grid lg:grid-cols-2 gap-3">
				{articles.map((article) => (
					<ListItem key={article.id} post={article} type={articleType} />
				))}
			</ul>
		</section>
	);
}
