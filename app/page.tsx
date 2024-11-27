import { v4 as uuidv4 } from "uuid";
import CustomCardList from "./components/CustomCardList";
import CvPaths from "./components/CvPaths";
import MarkdownLoader from "./components/MarkdownLoader";
import MyProfilePic from "./components/MyProfilePic";

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
