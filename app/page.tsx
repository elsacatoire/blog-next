'use client'

import { v4 as uuidv4 } from "uuid";
import CustomCardList from "./components/CustomCardList";
import MyProfilePic2 from "./components/MyProfilePic2";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

const frontendCardContent = {
	title: "Frontend",
	items: [
		"TypeScript, HTML, CSS",
		"React, NextUI, Next",
		"Vue, Vuetify, Nuxt",
		"React Native",
		"ShadnUI",
		"Jest"
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
	title: "Outils",
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
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		try {
			fetch("/content/hero.md")
				.then((res) => res.text())
				.then((text) => setHeroMdContent(text));
		} catch (error) {
			console.log(error);
		}

		try {
			fetch("/content/main_page_content.md")
				.then((res) => res.text())
				.then((text) => setMainMdContent(text));
		} catch (error) {
			console.log(error)
		}
		setIsLoading(false)
	}, []);

	return (
		<div className="flex flex-col gap-3 text-left block pr-3 md:p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<h1 className="font-bold text-2xl">Elsa — Développeuse Fullstack/Frontend Junior</h1>
			<div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
				<div className="md:w-2/3 md:order-1 prose prose-lg dark:prose-dark">
					{isLoading ? (
						<div>

							<p>Markdown en cours de chargement</p></div>
					) : (
						<ReactMarkdown className="prose dark:prose-dark">
							{heroMdContent}
						</ReactMarkdown>
					)}
				</div>

				<div className="md:w-1/3 md:order-2 rounded-lg">
					<MyProfilePic2 />
				</div>
			</div>
			<div className="flex gap-6">
				<div className="flex flex-col flex-wrap justify-between">
					{[frontendCardContent, backendCardContent, othersCardContent].map(
						(content, index) => (
							<div
								key={uuidv4()}
								className={`w-full md:order-${index + 1}`}
							>
								<CustomCardList title={content.title} items={content.items} />
							</div>
						),
					)}
				</div>

				<div className="prose dark:prose-dark w-full md:w-full">
					<ReactMarkdown className="prose dark:prose-dark w-full md:w-full">
						{mainMdContent}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	);
}
