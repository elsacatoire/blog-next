import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import Link from "next/link";

type Props = {
	post: ArticleType;
	type: "project" | "post";
};

export default function ListItem({ post, type }: Props) {
	const { id, title, date, stack, alt, image } = post;
	const formattedDate = getFormattedDate(date);

	const href = type === "project" ? `/projets/${id}` : `/posts/${id}`;

	return (
		<Link
			className="mx-auto w-full flex flex-col items-center rounded-lg bg-gray-300 border shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
			href={href}
		>
			<Image
				className="object-cover p-0 w-[150px] h-[150px] rounded-l"
				src={image}
				alt={alt || ""}
				width={500}
				height={500}
			/>
			<div className="flex flex-col gap-2 justify-between p-3 leading-normal">
				<h1 className="text-1xl font-bold text-gray-900 dark:text-white">
					{title}
				</h1>
				{stack && <h6 className="text-green-900 text-sm">{stack}</h6>}
				<p className=" text-sm font-normal text-green-700 dark:text-gray-400">
					{formattedDate}
				</p>
			</div>
		</Link>
	);
}
