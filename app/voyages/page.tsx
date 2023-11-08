import Gallery from "../components/Gallery";
import Link from "next/link";
import Image from "next/image";
import TextBoxEmphase from "../components/TextBoxEmphase";

export default function Voyages() {
    // Text data for the different parts of the page, in order to use components
    const textBoxData: { title: string; items: string[] }[] = [
        {
            title: 'Production',
            items: ['• 57 000km parcourus',
                '• 22 pays',
                '• 9 woofings',
                '• Pair & mob voyages',
                '• Création et alimentation de communautés de voyageurs libres',
                '• Beaucoup de riens'],
        },
        {
            title: "Stack",
            items: ['• Renault Trafic L1L2',
                '• Batterie Lithium 100A',
                '• 60L eau propre',
                '• Douche solaire',
                '• Pelle',
                '• Reine du gaffeur',
                '• Park4Night',
                '• Chaussettes pilou',
            ],
        },
        {
            title: 'Skills',
            items: ['• Django, FAST API',
                '• Autonomie',
                '• Langages : anglais fluent, roumain, serbo-croate, turc',
                '• Ukulélé',
                '• Conduire un tracteur',
                '• Traite et fabrication de fromage',
                '• Randonnée'],
        },
    ];
    return (
        <main>
            <div className="text-base text-left block p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
                    <div className="md:mt-5 md:w-1/3 md:order-1 ml-5">
                        <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Pérégrinations
                        </h5>
                        <br />
                        <p className="text-center font-semibold text-gray-700 dark:text-gray-400">
                            [Octobre 2020 - Janvier 2023]
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Plus de 2 ans de voyages et bénévolats sur les routes d&rsquo;Europe. Du Portugual à la Turquie en passant par l&rsquo;Albanie et en rentrant par la Slovaquie... Un voyage immersif, en solo, autonome et libre.
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
                    {textBoxData.map((tech, index) => (
                        <TextBoxEmphase key={index} title={tech.title} items={tech.items} style={"w-full md:w-1/3 md:order-1 p-3"} />
                    ))}
                </div>
            </div>
            <div>
                <Gallery />
            </div>
        </main>
    )
}