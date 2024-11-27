import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import CustomCardList from "../components/CustomCardList";
import Gallery from "./components/Gallery";

const productionCardContent = {
	title: "Production",
	items: [
		"57 000km parcourus",
		"22 pays",
		"9 woofings",
		"Pair & mob voyages",
		"Création et animation de communautés de voyageurs libres",
		"Beaucoup de riens",
	],
};

const stackCardContent = {
	title: "Stack",
	items: [
		"Renault Trafic L1L2",
		"Batterie Lithium 100A",
		"60L eau propre",
		"Douche solaire",
		"Pelle",
		"Tout réparer avec du gaffeur",
		"Park4Night",
		"Chaussettes pilou",
	],
};

const skillsCardContent = {
	title: "Skills",
	items: [
		"Autonomie",
		"Langages : anglais fluent, roumain, serbo-croate, turc",
		"Ukulélé",
		"Conduire un tracteur",
		"Traite et fabrication de fromage",
		"Randonnée",
	],
};

export default function Voyages() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
				<div className="flex flex-col gap-4 md:mt-5 md:w-1/3 md:order-1 ml-5">
					<h1 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Pérégrinations
					</h1>
					<p className="text-center font-semibold text-gray-700 dark:text-gray-400">
						[Octobre 2020 - Janvier 2023]
					</p>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Plus de 2 ans de voyages et bénévolats sur les routes
						d&rsquo;Europe. Du Portugual à la Turquie en passant par
						l&rsquo;Albanie et en rentrant par la Slovaquie... Un voyage
						immersif, en solo, autonome et libre.
					</p>
				</div>
				<div className="md:w-2/3 md:order-2 rounded-lg center">
					<Link href="https://www.polarsteps.com/ElsaCatoire">
						<Image
							className="mx-auto mt-0 rounded-lg"
							src="/images/polarstep.jpg"
							width={800}
							height={800}
							alt="Elsa Catoire"
						/>
					</Link>
				</div>
			</div>
			<div className="flex flex-wrap gap-6 justify-between">
				{[productionCardContent, stackCardContent, skillsCardContent].map(
					(content) => (
						<div key={uuidv4()} className="w-full md:w-[30%]">
							<CustomCardList title={content.title} items={content.items} />
						</div>
					),
				)}
			</div>
			<Gallery />
		</div>
	);
}
