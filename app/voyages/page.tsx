import Gallery from "../components/Gallery";
import Link from "next/link";
import Image from "next/image";


export default function Voyages() {
    return (
        <main>
            <div className="text-base text-left block p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
                    <div className="md:mt-5 md:w-1/3 md:order-1 ml-5">
                        <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Pérégrinations
                        </h5>
                        <br />
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Environ 2 ans de voyages et bénévolats sur les routes d&rsquo;Europe. Du Portugual à la Turquie en passant par l&rsquo;Albanie et en rentrant par la Slovaquie... Un voyage immersif, en solo, autonome et libre.
                        </p>
                        <br />
                    </div>
                    <div className="md:w-2/3 md:order-2 rounded-lg center">
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
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Production</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; 57 000km parcourus</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; 22 pays</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; 9 woofings</p>

                        </div>
                    </div>
                    <div className="w-full md:w-1/3 md:order-2 p-3">
                        <div className="h-full max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Stack</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Renault Trafic L1L2</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Batterie Lithium 100A</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; 60L eau propre</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; douche solaire</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; pelle</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 md:order-3 p-3">
                        <div className="h-full max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Skills</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Autonomie</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Langages : roumain, serbo-croate, turc</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Ukulélé</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Conduire un tracteur</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Traite et fabrication de fromage</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Randonnée</p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <Gallery />
            </div>
        </main>
    )
}
