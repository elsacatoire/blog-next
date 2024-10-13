import Link from "next/link";
import MyProfilePic2 from "./components/MyProfilePic2";
import Post2 from "./components/Posts2";
import ProjectPosts2 from "./components/ProjectPosts2";
import CustomCardList from "./components/CustomCardList";

const backlogCardContent = {
	title: "Backlog",
	items: ["Django, FAST API", "React Native", "Angular", "Docker"]
}
const learningCardContent = {
	title: "J’apprends aussi",
	items: ["Java", "PHP", "SQL"]
};
const technosCardContent = {
	title: "Technos",
	items: [
		"JS, TS, HTML, CSS",
		"React, Vue (TS)",
		"Django RF (Python)",
		"Java Spring Boot",
		"strapi (CSS Headless)",
		"SQL (Postgre), NoSQL (MongoDB)",
		"API REST"
	]
};

export default function Home() {
	return (
		<main>
			<div className="text-left block pr-3 md:p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
					<div className="md:w-2/3 md:order-1 ml-5">
						<h1 className="text-center mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Bonjour et bienvenue 👋&nbsp;
							<span className="whitespace-nowrap">
								Hi I&apos;m <span className="font-bold">Elsa</span>
							</span>
						</h1>
						<br />
						<p className="font-normal text-gray-700 dark:text-gray-400">
							Je m&rsquo;appelle Elsa en évolution professionnelle dans le
							développement web et logiciel chez
							<span className="text-green-700 font-semibold">
								<Link href="https://adatechschool.fr/"> Ada Tech School</Link>
							</span>{" "}
							à Nantes.
						</p>
						<p className="font-normal text-gray-700 dark:text-gray-400">
							Learning in progress... 19 mois réalisés
						</p>
						<br />
						<p className="font-normal text-gray-700 dark:text-gray-400">
							Contrat de professionnalisation chez{" "}
							<span className="text-green-700 font-semibold">
								Apside Nantes
							</span>{" "}
							depuis octobre 2023, jusqu&rsquo;à fin novembre 2024, au rythme de
							4 jours par semaine en entreprise.
						</p>
						<br />
						<div>
							<p className="text-xl font-semibold text-green-700 dark:text-gray-400">
								&#128640;En projet
							</p>
							<ul className="font-normal text-gray-700 dark:text-gray-400 list-disc list-inside">
								<li>
									Alternance developpeuse full stack d&rsquo;un an à Nantes
									depuis d&rsquo;octobre 2023
								</li>
								<li>Projet dev perso : Gobiloc, app de gestion de collocation</li>
								<li>Projet pro : client SNCF Connect</li>
								<li>
									Préparation de la certification{" "}
									<span className="text-green-700">
										<Link href="https://www.francecompetences.fr/recherche/rncp/37873/">
											Conceptrice développeuse d&rsquo;application web
										</Link>{" "}
										RNCP 6 (BAC+3)
									</span>{" "}
									en 2024
								</li>
							</ul>
						</div>
						<br />
						<div>
							<p className="text-xl font-semibold text-green-700 dark:text-gray-400">
								&#x1F49C;Télécharger mon CV
							</p>
							<Link href="https://drive.google.com/file/d/1haVaP9vMx9W6SvDD2dHWN6FrKs1aWArs/view?usp=sharing">
								<p className="font-normal text-gray-700 dark:text-gray-400">
									&#x2022; <span className="underline">Version française</span>
								</p>
							</Link>
							<Link href="https://drive.google.com/file/d/1uh-C1mp-7bGBXiuJBzGnv7hlpCzODDpg/view?usp=drive_link">
								<p className="font-normal text-gray-700 dark:text-gray-400">
									&#x2022; <span className="underline">English version</span>
								</p>
							</Link>
						</div>
					</div>

					<div className="md:w-1/3 md:order-2 rounded-lg center m-auto">
						<MyProfilePic2 />
					</div>
				</div>
				<div className="justify-center flex flex-wrap mt-12">
					{[technosCardContent, learningCardContent, backlogCardContent].map((content, index) => (
						<div key={index} className={`w-full md:w-1/3 md:order-${index + 1} p-3`}>
							<CustomCardList title={content.title} items={content.items} />
						</div>
					))}
				</div>
			</div>
			<div className="w-full flex flex-wrap mt-10 justify-center">
				{[
					{ component: <ProjectPosts2 />, key: 'project-posts', className: 'md:pr-2 mb-4 md:mb-0' },
					{ component: <Post2 title={"Derniers articles"} sliceCount={2} />, key: 'posts', className: 'md:pl-2' }
				].map(({ component, key, className }) => (
					<div key={key} className={`w-full md:w-1/2 ${className}`}>
						<div className="text-lg text-left p-5 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full flex flex-col">
							{component}
						</div>
					</div>
				))}
			</div>
		</main>
	);
}