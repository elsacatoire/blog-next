'use client'

import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import CustomCardList from "./components/CustomCardList";
import MyProfilePic2 from "./components/MyProfilePic2";
import Post2 from "./components/Posts2";
import ProjectPosts2 from "./components/ProjectPosts2";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

const frontendCardContent = {
	title: "Frontend",
	items: [
		"TypeScript, HTML, CSS",
		"React, NextUI, Next",
		"Vue, Vuetify, Nuxt",
		"React Native",
		"ShadnUI"
	],
};

const backendCardContent = {
	title: "Backend",
	items: [
		"Django RF (Python)",
		"API REST",
		"SQL (PostgreSQL), NoSQL (MongoDB)",
		"Strapi (CMS Headless)",
		"Java Spring Boot (notions)",
	],
};

const othersCardContent = {
	title: "Autres",
	items: [
		"Docker",
		"Postman (tests API)",
		"Github Actions (CI/CD)",
		"Playwrigh (tests E2E)"
	],
};

export default function Home() {

	const [heroMdContent, setHeroMdContent] = useState("");
	const [mainMdContent, setMainMdContent] = useState("");

	useEffect(() => {
		fetch("/content/hero.md")
			.then((res) => res.text())
			.then((text) => setHeroMdContent(text));

		fetch("/content/main_page_content.md")
			.then((res) => res.text())
			.then((text) => setMainMdContent(text));
	}, []);

	return (
		<main>
			<div className="text-left block pr-3 md:p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
					<div className="md:w-2/3 md:order-1 prose prose-lg dark:prose-dark">
						<ReactMarkdown className="prose dark:prose-dark">
							{heroMdContent}
						</ReactMarkdown>
					</div>

					<div className="md:w-1/3 md:order-2 rounded-lg top m-auto">
						<MyProfilePic2 />
					</div>
				</div>
				<div className="justify-center flex flex-wrap">
					{[frontendCardContent, backendCardContent, othersCardContent].map(
						(content, index) => (
							<div
								key={uuidv4()}
								className={`w-full md:w-1/3 md:order-${index + 1} p-3`}
							>
								<CustomCardList title={content.title} items={content.items} />
							</div>
						),
					)}
				</div>

				<div className="prose prose-lg dark:prose-dark w-full">
					<ReactMarkdown className="prose dark:prose-dark">
						{mainMdContent}
					</ReactMarkdown>
				</div>
			</div>
		</main>
	);
}
