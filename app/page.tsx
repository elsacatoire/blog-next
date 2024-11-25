import { v4 as uuidv4 } from "uuid";
import CustomCardList from "./components/CustomCardList";
import CvPaths from "./components/CvPaths";
import MarkdownLoader from "./components/MarkdownLoader"; // Import du composant
import MyProfilePic2 from "./components/MyProfilePic2";

const frontendCardContent = {
	title: "Frontend",
	items: [
		"TypeScript, HTML, CSS",
		"React, NextUI, Next",
		"Vue, Vuetify, Nuxt",
		"React Native",
		"ShadnUI",
		"Jest",
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
		"Playwright (tests E2E)",
	],
};

export default function Home() {
	return (
		<div className="flex flex-col gap-4 text-left block pr-3 md:p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<h1 className="font-bold text-2xl text-green-700">
				Elsa — Développeuse Fullstack/Frontend
			</h1>
			<div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
				<div className="flex flex-col gap-4 md:w-2/3 md:order-1">
					<MarkdownLoader filePath="/content/hero.md" />
					<CvPaths />
				</div>

				<div className="md:w-1/3 md:order-2 rounded-lg top m-auto">
					<MyProfilePic2 />
				</div>
			</div>
			<div className="flex gap-6">
				<div className="flex flex-col gap-6 flex-wrap justify-between">
					{[frontendCardContent, backendCardContent, othersCardContent].map(
						(content, index) => (
							<div key={uuidv4()} className={`w-full md:order-${index + 1}`}>
								<CustomCardList title={content.title} items={content.items} />
							</div>
						),
					)}
				</div>

				<div>
					<MarkdownLoader filePath="/content/main_page_content.md" />
				</div>
			</div>
		</div>
	);
}
