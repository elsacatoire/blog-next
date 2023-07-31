
import ProjectPosts from "../components/ProjectPosts"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
    return (
        <main>
            <div className="text-left block p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
                    <div className="md:w-2/3 md:order-1 ml-5">
                        <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Mes projets d&rsquo;apprentissage, école et perso
                        </h5>
                        <br />
                        <section className="text-left">
                            <p className="font-normal text-gray-700 dark:text-gray-400">J&apos;apprends à coder tous les jours par une pratique constante du code en école et sur mon temps libre. En école, encadrés par des dévs professionnels nous apprenons en itérations de deux semaines : notions plus théoriques et travail de groupe. Nous sommes incités à apprendre ensemble dans un esprit sain, favorisant l&apos;entraide et la transmission plutôt que la compétition.</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Sur mon temps libre, je profite de repasser sur les technologies qui m&apos;intriguent le plus, ou qui m'amusent (comme coder un Snake avec P5js).</p>
                            <p className="font-normal text-green-700 dark:text-gray-400">
                                <br />
                                &#x2794; <Link href="https://github.com/elsacatoire">Pour jeter un oeil à mon travail d&apos;apprenante : GitHub profil</Link>
                            </p>
                            <br /></section>

                        <div className="h-full max-w-m p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dans les tuyaux</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; plateforme de microblogging (Docker, Laravel, Blade, Breeze, PHPUnit) - 3 personnes, 9 jours</p>
                            <br />
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; site de révision/flash cards sur des notions techs et dévleoppement (perso)</p>
                        </div>

                    </div>

                    <div className="object-center md:w-1/3 md:order-2 rounded-lg center m-auto">
                        <Image
                            className="mx-auto mt-0 rounded-lg"
                            src="/images/projets.jpg"
                            width={400}
                            height={400}
                            alt="Elsa Catoire"
                            priority={true}
                        />
                    </div>

                </div>
                <div className="justify-center flex flex-wrap mt-5">
                    <ProjectPosts />
                </div>


            </div>
        </main>
    )
}