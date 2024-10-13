import Link from "next/link";
import React from "react";
type LinkItem = {
	text: string;
	href: string;
};
type TextBoxProps = {
	title: string;
	items: (string | LinkItem)[];
	style: string;
};

const TextBoxEmphase = ({ title, items, style }: TextBoxProps) => {
	return (
		<div className={style}>
			<div className="h-full max-w-sm p-6 bg-gray-300 border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				{items.map((item, index) => (
					<p
						key={index}
						className="font-normal text-gray-700 dark:text-gray-400"
					>
						{typeof item === "string" ? (
							item
						) : (
							<div className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
								<Link
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									{item.text}
								</Link>
							</div>
						)}
					</p>
				))}
			</div>
		</div>
	);
};

export default TextBoxEmphase;
