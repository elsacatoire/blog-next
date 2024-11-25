import MarkdownLoader from "../components/MarkdownLoader";
import MyProfilePic from "../components/MyProfilePic";

export default function Présentation() {
	return (
		<main>
			<div className="p-6 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<div className="flex flex-wrap mt-5">
					<div className="flex flex-col gap-4 md:w-2/3 md:order-1 md:pr-8 m-auto">
						<h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							En savoir un petit peu plus sur moi{" "}
						</h1>
						<div>
							<MarkdownLoader filePath="/content/presentation.md" />
						</div>
					</div>
					<div className="md:w-1/3 md:order-2 center">
						<MyProfilePic />
						<div className=" mt-5 p-6 bg-gray-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Et mon temps libre ?
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Perchée sur une montagne
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Randonnée, escalade
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Musique, ukulélé, chant
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Ecologie, green-tech, low-tech
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Bricoloage, DIY
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; Jeux de rôle
							</p>
							<p className="font-normal text-green-700 dark:text-gray-400">
								&#x2022; English fluent
							</p>
						</div>
						<div className=" mt-5 p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Diplomes et concours
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								<span className="font-bold text-green-700">2016&rarr; </span>{" "}
								Concours Cat A - Attachée Territoriale
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								<span className="font-bold text-green-700">2013&rarr; </span>{" "}
								Master2 Management Culturel
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								<span className="font-bold text-green-700">2011&rarr; </span>{" "}
								Licence3 LEA Anglais espagnol
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								<span className="font-bold text-green-700">2007&rarr; </span>{" "}
								BAC S - Sciences de l&rsquo;ngénieur
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
