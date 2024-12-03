"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CustomCardList from "../components/CustomCardList";
import Gallery from "./components/Gallery";

const productionCardContent = {
	title: "Production",
	items: [
		{ id: 1, text: "57 000km parcourus" },
		{ id: 2, text: "22 pays" },
		{ id: 3, text: "9 woofings" },
		{ id: 4, text: "Pair & mob voyages" },
		{ id: 5, text: "Création et animation de communautés de voyageurs libres" },
		{ id: 6, text: "Beaucoup de riens" },
	],
};

const stackCardContent = {
	title: "Stack",
	items: [
		{ id: 1, text: "Renault Trafic L1L2" },
		{ id: 2, text: "Batterie Lithium 100A" },
		{ id: 3, text: "60L eau propre" },
		{ id: 4, text: "Douche solaire" },
		{ id: 5, text: "Pelle" },
		{ id: 6, text: "Tout réparer avec du gaffeur" },
		{ id: 7, text: "Park4Night" },
		{ id: 8, text: "Chaussettes pilou" },
	],
};

const skillsCardContent = {
	title: "Skills",
	items: [
		{ id: 1, text: "Autonomie" },
		{ id: 2, text: "Langages : anglais fluent, roumain, serbo-croate, turc" },
		{ id: 3, text: "Ukulélé" },
		{ id: 4, text: "Conduire un tracteur" },
		{ id: 5, text: "Traite et fabrication de fromage" },
		{ id: 6, text: "Randonnée" },
	],
};

export default function Voyages() {
	const [isLoading, setIsLoading] = useState(true);

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
						{isLoading && (
							<div className=" w-48 h-16 absolute inset-0 bg-gray-200 animate-pulse rounded-l dark:bg-gray-600" />
						)}
						<Image
							className="mx-auto mt-0 rounded-lg"
							src="/images/polarstep.jpg"
							width={800}
							height={800}
							alt="Elsa Catoire"
							onLoadingComplete={() => setIsLoading(false)}
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
