import { v4 as uuidv4 } from "uuid";
import CustomCardList from "./components/CustomCardList";
import CvPaths from "./components/CvPaths";
import MarkdownLoader from "./components/MarkdownLoader";
import MyProfilePic from "./components/MyProfilePic";

const frontendCardContent = {
	title: "Frontend",
	items: [
		{ id: 1, text: "TypeScript, HTML, CSS" },
		{ id: 2, text: "React, NextUI, Next" },
		{ id: 3, text: "Vue, Vuetify" },
		{ id: 4, text: "React Native" },
		{ id: 5, text: "ShadnUI" },
		{ id: 6, text: "Jest" },
	],
};

const backendCardContent = {
	title: "Backend",
	items: [
		{ id: 1, text: "Python/Django RF" },
		{ id: 2, text: "TypeScript/NodeJs" },
		{ id: 3, text: "API REST" },
		{ id: 4, text: "SQL (PostgreSQL), NoSQL (MongoDB)" },
		{ id: 5, text: "Strapi (CMS Headless)" },
		{ id: 6, text: "Java Spring Boot (notions)" },
	],
};

const othersCardContent = {
	title: "Outils",
	items: [
		{ id: 1, text: "Docker" },
		{ id: 2, text: "Postman (tests API)" },
		{ id: 3, text: "Github Actions (CI/CD)" },
		{ id: 4, text: "Playwright (tests E2E)" },
		{ id: 5, text: "Jira" },
	],
};

export default function Home() {
	return (
		<div className="flex flex-col gap-3 md:gap-8">
			<h1 className="font-bold text-xl md:text-2xl">
				Elsa — Développeuse Fullstack / Frontend
			</h1>
			<div className="flex flex-col-reverse gap-4 md:flex-row md:space-x-8 items-start">
				<div className="flex flex-col gap-4 md:w-2/3 md:order-1">
					<MarkdownLoader filePath="/content/hero.md" />
					<CvPaths />
				</div>

				<div className="md:w-1/3 md:order-2 rounded-lg top m-auto">
					<MyProfilePic
						imgPath={"/images/profileD.jpg"}
						alt={"Elsa Catoire"}
						width={300}
						height={300}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-6">
				<div className="flex flex-wrap gap-6 justify-between">
					{[frontendCardContent, backendCardContent, othersCardContent].map(
						(content) => (
							<div key={uuidv4()} className="w-full md:w-[30%]">
								<CustomCardList title={content.title} items={content.items} />
							</div>
						),
					)}
				</div>
				<div className="w-full mx-auto">
					<MarkdownLoader filePath="/content/main_page_content.md" />
				</div>
			</div>
		</div>
	);
}
