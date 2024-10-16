import Image from "next/image";
import Link from "next/link";

export default function Contact() {
	return (
		<main>
			<div className="text-base text-left block md:p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
					<div className="md:w-2/3 md:order-2 m-1 md:ml-5">
						<h5 className="text-center md:px-10 md:mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Curieuse et ouverte la conversation, n&rsquo;hésitez pas à me
							contacter
						</h5>
						<h3 className="text-center text-green-700 md:px-20 md:mb-2 md:text-3l tracking-tight dark:text-white">
							*Elsa is also available in English. I am used to live and work
							abroad. Willing to move in another country and/or be remote for
							the right project. So let&rsquo;s talk about your projetcts !
						</h3>
						<br />
						<p className="font-normal text-gray-700 dark:text-gray-400"></p>
						<br />
						<section className="text-center">
							<h1 className="md:mt-5 text-center mx-auto mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Des feedbacks techniques, typo, design ?
							</h1>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								J&apos;ai réalisé ce site pour apprendre
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								Il est très certainement imparfait
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								Tout retour bienveillant m&apos;aiderait à progresser
							</p>
							<h5 className="text-center mb-2 md:text-1xl font-bold tracking-tight text-green-700 dark:text-white">
								&#x2794;{" "}
								<Link href="https://github.com/elsacatoire/next-portfolio/issues">
									GitHub Issues
								</Link>
							</h5>
						</section>
					</div>

					<div className="object-center md:w-1/3 md:order-1 rounded-lg mx-auto max-w-md">
						<Link href="https://www.polarsteps.com/ElsaCatoire">
							<Image
								className="mx-auto mt-0 rounded-lg"
								src="/images/chat.jpg"
								width={400}
								height={400}
								alt="Elsa Catoire"
								priority={true}
							/>
						</Link>
					</div>
				</div>
				<div className="justify-center flex flex-wrap mt-5">
					<div className="w-full md:w-1/3 md:order-1 p-3">
						<div className="h-full max-w-sm p-6 mx-auto  bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Coordonnées
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; +336 62 04 88 85
							</p>
							<br />
							<p className="font-normal text-gray-700 dark:text-gray-400">
								&#x2022; elsa.catoire @gmail.com
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/3 md:order-2 p-3">
						<div className="h-full max-w-sm p-6 mx-auto  bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Réseaux pro
							</h5>
							<Link
								href="https://www.linkedin.com/in/elsa-catoire-11402753/"
								className="mr-5 hover:underline md:mr-10"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									&#x2022; LinkedIn
								</p>
							</Link>
							<Link
								href="https://github.com/elsacatoire"
								className="mr-5 hover:underline md:mr-10"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									&#x2022; GitHub
								</p>
							</Link>
						</div>
					</div>

					<div className="w-full md:w-1/3 md:order-3 p-3">
						<div className="h-full max-w-sm p-6 mx-auto bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Ecrits, voyages
							</h5>
							<Link
								href="https://medium.com/@elsa.catoire"
								className="mr-5 hover:underline md:mr-10"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									&#x2022; Medium
								</p>
							</Link>
							<Link
								href="https://www.polarsteps.com/ElsaCatoire"
								className="mr-5 hover:underline md:mr-10"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									&#x2022; Polarstep
								</p>
							</Link>
							<Link
								href="https://www.instagram.com/elsa_des_bois/"
								className="mr-5 hover:underline md:mr-10"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									&#x2022; Instagram
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
