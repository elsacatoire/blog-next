import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import Link from "next/link";

type Props = {
	post: BlogPost;
};

export default function ListItem({ post }: Props) {
	const { id, title, date, image } = post;
	const formattedDate = getFormattedDate(date);

	return (
		<Link
			className="mt-5 mx-auto w-full flex flex-col items-center rounded-lg bg-gray-300 border shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
			href={`/posts/${id}`}
		>
			<Image
				className="imgProject rounded-l"
				src={image}
				alt=""
				width={100}
				height={100}
			/>
			<div className="flex flex-col justify-between p-4 leading-normal">
				<h1 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h1>
				<p className="text-left mt-7 text-sm font-normal text-green-700 dark:text-gray-400">
					{formattedDate}
				</p>
			</div>
		</Link>
	);
}
