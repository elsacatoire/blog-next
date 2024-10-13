import Link from "next/link";
import MyProfilePic2 from "./components/MyProfilePic2";
import Post2 from "./components/Posts2";
import ProjectPosts2 from "./components/ProjectPosts2";

export default function Home() {
	return (
		<main>
			<div className="text-left block pr-3 md:p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
					<div className="md:w-2/3 md:order-1 ml-5">
						<h5 className="text-center mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Bonjour et bienvenue 👋&nbsp;
							<span className="whitespace-nowrap">
								Hi I&apos;m <span className="font-bold">Elsa</span>
							</span>
						</h5>
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
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Alternance developpeuse full stack d&rsquo;un an à
								Nantes depuis d&rsquo;octobre 2023
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Projet dev perso : Gobiloc, app de gestion de
								collocation
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Projet pro : client SNCF Connect
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Préparation de la certification{" "}
								<span className="text-green-700">
									{" "}
									<Link href="https://www.francecompetences.fr/recherche/rncp/37873/">
										Conceptrice développeuse d&rsquo;application web
									</Link>{" "}
									RNCP 6 (BAC+3)
								</span>{" "}
								en 2024
							</p>
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
					<div className="w-full md:w-1/3 md:order-1 p-3">
						<div className="h-full max-w-sm p-6 bg-gray-300 border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Technos &#9829;
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; JS, TS, HTML, CSS
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; React, Vue (TS)
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Django RF (Python)
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Java Spring Boot
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; strapi (CSS Headless)
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; SQL (Postgre), NoSQL (MongoDB)
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; API REST
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/3 md:order-2 p-3">
						<div className="h-full max-w-sm p-6 bg-gray-300 border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								J&rsquo;apprends aussi
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Java
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; PHP
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; SQL
							</p>
						</div>
					</div>

					<div className="w-full md:w-1/3 md:order-3 p-3">
						<div className="h-full max-w-sm p-6 bg-gray-300 border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Backlog
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Django, FAST API
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; React nativ
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Angular
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Docker
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-wrap mt-10 justify-center">
				<div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
					<div className="text-lg text-left p-5 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full flex flex-col">
						<ProjectPosts2 />
					</div>
				</div>
				<div className="w-full md:w-1/2 md:pl-2">
					<div className="text-lg text-left p-5 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full flex flex-col">
						<Post2 />
					</div>
				</div>
			</div>
		</main>
	);
}