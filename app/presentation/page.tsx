import CustomCardList from "../components/CustomCardList";
import MarkdownLoader from "../components/MarkdownLoader";
import MyProfilePic from "../components/MyProfilePic";

const hobbies = [
	"Perchée sur une montagne",
	"Randonnée, escalade",
	"Musique, ukulélé, chant",
	"Ecologie, green-tech, low-tech",
	"Bricolage, DIY",
	"Jeux de rôle",
	"English fluent",
];

const diplomas = [
	"2016: Concours Cat A - Attachée Territoriale",
	"2013: Master2 Management Culturel",
	"2011: Licence3 LEA Anglais espagnol",
	"2007: BAC S - Sciences de l'ingénieur",
];

export default function Présentation() {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-wrap">
				<div className="flex flex-col gap-4 md:w-2/3 md:order-1 md:pr-8 m-auto">
					<h1 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						En savoir un petit peu plus sur moi
					</h1>
					<div>
						<MarkdownLoader filePath="/content/presentation.md" />
					</div>
				</div>

				<div className="md:w-1/3 md:order-2 center">
					<MyProfilePic
						imgPath={"/images/profile.jpg"}
						alt={"Elsa Catoire"}
						width={600}
						height={600}
					/>

					<div className="mt-5">
						<CustomCardList title="Et mon temps libre ?" items={hobbies} />
					</div>

					<div className="mt-5">
						<CustomCardList title="Diplômes et concours" items={diplomas} />
					</div>
				</div>
			</div>
		</div>
	);
}
