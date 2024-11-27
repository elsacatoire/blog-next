import CustomCardList from "../components/CustomCardList";
import MarkdownLoader from "../components/MarkdownLoader";
import MyProfilePic from "../components/MyProfilePic";

const hobbiesCardContent = {
	title: "Hobbies",
	items: [
		{ id: 1, text: "Perchée sur une montagne" },
		{ id: 2, text: "Randonnée, escalade" },
		{ id: 3, text: "Musique, ukulélé, chant" },
		{ id: 4, text: "Ecologie, green-tech, low-tech" },
		{ id: 5, text: "Bricolage, DIY" },
		{ id: 6, text: "Jeux de rôle" },
		{ id: 7, text: "English fluent" },
	],
};

const diplomasCardContent = {
	title: "Diplômes",
	items: [
		{ id: 1, text: "2024: RNCP6 Conceptrice Développeuse d'Application" },
		{ id: 2, text: "2016: Concours Cat A - Attachée Territoriale" },
		{ id: 3, text: "2013: Master2 Management Culturel" },
		{ id: 4, text: "2011: Licence3 LEA Anglais espagnol" },
		{ id: 5, text: "2007: BAC S - Sciences de l'ingénieur" },
	],
};

export default function Présentation() {
	return (
		<div className="flex flex-wrap">
			<div className="flex flex-col gap-4 md:w-2/3 md:order-1">
				<h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					En savoir un petit peu plus sur moi
				</h1>
				<div className="pr-3">
					<MarkdownLoader filePath="/content/presentation.md" />
				</div>
			</div>
			<div className="flex flex-col gap-4 md:w-1/3 md:order-2 center w-full">
				<MyProfilePic
					imgPath={"/images/profile.jpg"}
					alt={"Elsa Catoire"}
					width={600}
					height={600}
				/>
				<CustomCardList
					title={diplomasCardContent.title}
					items={diplomasCardContent.items}
				/>
				<CustomCardList
					title={hobbiesCardContent.title}
					items={hobbiesCardContent.items}
				/>
			</div>
		</div>
	);
}
