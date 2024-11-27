import Link from "next/link";
import React from "react";

type CustomCardListProps = {
	title: string;
	items: { text: string; href?: string; id: number }[];
};

const CustomCardList = ({ title, items }: CustomCardListProps) => {
	return (
		<div className="h-full w-full max-w-sm p-6 bg-gray-300 border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
			<h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h1>
			<ul className="flex flex-col font-normal text-gray-700 dark:text-gray-400 gap-1">
				{items.map(({ id, text, href }) => (
					<li key={id}>
						{href ? (
							<Link
								href={href}
								className="text-blue-500 hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								&#x2022; {text}
							</Link>
						) : (
							<span>&#x2022; {text}</span>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CustomCardList;
