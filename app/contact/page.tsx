import Link from "next/link"

export default function Contact() {
    return (
        <main>
            <div className="p-20 text-lg text-left block max-w-m text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Curieuse et ouverte la conversation, n&rsquo;hésitez pas à me contacter
                </h5>
                <br />
                <div className="justify-center flex felx-wrap mt-12">
                    <div className="block w-full md:w-1/3 md:order-1 mr-3 max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coordonnées</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; +336 62 04 88 85</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; elsa.catoire@gmail.com</p>
                    </div>
                    <div className="block w-full md:w-1/3 md:order-2 mr-3 max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Réseaux profesionnels</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; LinkedIn</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; GitHub</p>
                    </div>
                    <div className="block w-full md:w-1/3 md:order-3 max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Autres</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Medium</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Instagram</p>
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
