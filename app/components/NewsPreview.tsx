import React from "react";
import Articles from "./Articles";

function NewsPreview() {
	return (
		<div className="w-full flex flex-wrap mt-10 justify-center">
			{[
				{
					component: <Articles articleType={"project"} limit={2} />,
					key: "projects",
					className: "md:pr-2 mb-4 md:mb-0",
				},
				{
					component: <Articles articleType={"post"} limit={2} />,
					key: "posts",
					className: "md:pl-2",
				},
			].map(({ component, key, className }) => (
				<div key={key} className={`w-full md:w-1/2 ${className}`}>
					<div className="text-lg text-left p-5 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
						{component}
					</div>
				</div>
			))}
		</div>
	);
}

export default NewsPreview;
