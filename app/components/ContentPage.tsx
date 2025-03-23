import MarkdownLoader from "@/app/components/MarkdownLoader";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { notFound } from "next/navigation";

type ContentType = "blog" | "project";

type Props = {
	params: { id: string };
	type: ContentType;
	getSortedData: () => { id: string; title: string; date: string }[];
	getData: (
		id: string,
	) => Promise<{ title: string; date: string; contentHtml?: string }>;
	redirectPath: string;
	contentPath: string;
};

export default async function ContentPage({
	params,
	type,
	getSortedData,
	getData,
	redirectPath,
	contentPath,
}: Props) {
	const { id } = params;
	const items = getSortedData();

	if (!items.find((item) => item.id === id)) notFound();

	const { title, date, contentHtml } = await getData(id);
	const pubDate = getFormattedDate(date);

	return (
		<div className="max-w-4xl mx-auto">
			<Link href={redirectPath}>← Retour</Link>

			<h1 className="text-3xl mt-8 mb-8">{title}</h1>
			<p className="mt-0 mb-4">{pubDate}</p>

			<article>
				{type === "blog" && contentPath && (
					<MarkdownLoader filePath={`${contentPath}/${id}.md`} />
				)}

				{type === "project" && contentHtml && (
					<div>
						<MarkdownLoader filePath={`${contentPath}/${id}.md`} />
					</div>
				)}
			</article>

			<p className="mb-8 mt-8 text-xl font-semibold text-green-700">
				<Link href={redirectPath}>← Retour</Link>
			</p>
		</div>
	);
}
