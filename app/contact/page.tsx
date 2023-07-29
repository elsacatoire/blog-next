import Link from "next/link"
import Image from "next/image"

export default function Contact() {
    return (
        <main>
            <div className="text-lg text-left block p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
                    <div className="md:w-1/2 md:order-1 ml-5">
                        <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Curieuse et ouverte la conversation, n&rsquo;hésitez pas à me contacter
                        </h5>
                        <br />
                        <p className="font-normal text-gray-700 dark:text-gray-400">

                        </p>
                        <br />

                    </div>

                    <div className="md:w-1/2 md:order-2 rounded-lg center">
                        <Link href="https://www.polarsteps.com/ElsaCatoire">
                            <Image
                                className="mx-auto mt-0 rounded-lg"
                                src="/images/polarstep.jpg"
                                width={1000}
                                height={1000}
                                alt="Elsa Catoire"
                                priority={true}
                            />
                        </Link>
                    </div>

                </div>
                <div className="justify-center flex flex-wrap mt-12">
                    <div className="w-full md:w-1/3 md:order-1 p-3">
                        <div className="h-full max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coordonnées</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; +336 62 04 88 85</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; elsa.catoire@gmail.com</p>

                        </div>
                    </div>
                    <div className="w-full md:w-1/3 md:order-2 p-3">
                        <div className="h-full max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Réseaux profesionnels</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; LinkedIn</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; GitHub</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 md:order-3 p-3">
                        <div className="h-full max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ecrits, voyages</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Medium</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Polarstep</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Instagram</p>
                        </div>
                    </div>
                </div>
                <h5 className="mt-10 text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Des feedbacks techniques, typo, design ?
                </h5>
                <h5 className="mt-10 text-center mb-2 text-2xl font-bold tracking-tight text-green-700 dark:text-white">
                    &#x2794; <Link href="https://github.com/elsacatoire/next-portfolio/issues">GitHub Issues</Link>
                </h5>
            </div>
        </main>
    )
}
