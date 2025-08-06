import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import CustomCardList from "../components/CustomCardList";

const cardData = [
	{
		title: "Coordonnées",
		items: [
			{ id: 1, text: "+336 62 04 88 85" },
			{ id: 2, text: "elsa.catoire@gmail.com" },
		],
	},
	{
		title: "Réseaux pro",
		items: [
			{
				id: 1,
				text: "LinkedIn",
				href: "https://www.linkedin.com/in/elsa-catoire-11402753/",
			},
			{ id: 2, text: "GitHub", href: "https://github.com/elsacatoire" },
		],
	},
	{
		title: "Écrits, voyages",
		items: [
			{ id: 1, text: "Medium", href: "https://medium.com/@elsa.catoire" },
			{
				id: 2,
				text: "Polarstep",
				href: "https://www.polarsteps.com/ElsaCatoire",
			},
			{
				id: 3,
				text: "Instagram",
				href: "https://www.instagram.com/elsa_des_bois/",
			},
		],
	},
];

export default function Contact() {
	return (
		<div className="flex flex-col gap-8">
			<h1 className="md:px-10 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
				Curieuse et ouverte la conversation, n&rsquo;hésitez pas à me contacter
			</h1>
			<div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start w-full justify-between gap-3">
				<div className="flex flex-col md:w-2/3 md:order-2 md:ml-5 text-center gap-2 ">
					<p className="text-green-700 md:px-20 md:mb-2 md:text-3l tracking-tight dark:text-white">
						I am keen to work remotly and in english. I am used to live and work
						abroad. Willing to move in another country and/or be remote for the
						right project. So let&rsquo;s talk about yours !
					</p>
					<p className="mx-auto md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Des feedbacks techniques, typo, design ?
					</p>
					<p className="font-normal text-gray-900 dark:text-gray-400">
						J&apos;ai réalisé ce site pour apprendre
					</p>
					<p className="font-normal text-gray-900 dark:text-gray-400">
						Il est très certainement imparfait
					</p>
					<p className="font-normal text-gray-900 dark:text-gray-400">
						Tout retour bienveillant m&apos;aiderait à progresser
					</p>
					<p className="mb-2 md:text-1xl font-bold tracking-tight text-green-700 dark:text-white">
						&#x2794;{" "}
						<Link href="https://github.com/elsacatoire/next-portfolio/issues">
							GitHub Issues
						</Link>
					</p>
				</div>

				<div className="md:w-1/4 md:order-1 rounded-lg">
					<Image
						className="rounded-lg"
						src="/images/chat.jpg"
						width={400}
						height={400}
						alt="Elsa Catoire"
						priority={true}
					/>
				</div>
			</div>
			<div className="justify-center flex flex-wrap">
				<div className="flex flex-wrap gap-6 w-full">
					{cardData.map((content) => (
						<div key={uuidv4()} className="w-full md:w-[30%] justify-between">
							<CustomCardList title={content.title} items={content.items} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
