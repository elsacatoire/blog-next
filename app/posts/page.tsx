import Posts from "../components/Posts";
import Link from "next/link";

export default function PostsPage() {
    return (
        <main>
            <div className="text-left block p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="flex flex-col md:flex-row md:space-x-8 items-start">
                    <div className="md:w-2/3 md:order-1s mx-auto">
                        <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Parfois je pense, parfois j&apos;écris, parfois je rien
                        </h5>
                        <br />
                        <section className="text-left">
                            <p className="font-normal text-base text-gray-700 dark:text-gray-400">Dans mes petites passions il y a la lecture et l&apos;écriture.  &ldquo;Verba volant, scripta manent&ldquo; &#x21AD; &ldquo;Les paroles s&apos;envolent, les écrits restent&ldquo;, sensible à la formalisation écrite des chemins de pensées, au travail comme en dehors, l&apos;écrit a une importance particulière pour moi. Ces écrits, très personnels et fixés dans leur contexte, reflètent mes réflexions et humeurs du moment.</p>
                            <p className="font-normal text-green-700 dark:text-gray-400">
                                <br />
                            </p>
                            <br />
                        </section>
                    </div>
                    <div className="md:w-1/3 md:order-2 rounded-lg mx-auto">
                        <div className="h-full max-w-m p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quelques textes</h5>
                            <br />
                            <Link href="https://medium.com/@elsa.catoire" className="mr-5 hover:underline md:mr-10" target="_blank" rel="noopener noreferrer">
                                <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Medium</p>
                            </Link>
                            <Link href="https://www.instagram.com/elsa_des_bois/" className="mr-5 hover:underline md:mr-10" target="_blank" rel="noopener noreferrer">
                                <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Instagram</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="justify-center flex flex-wrap mt-5">
                    <Posts />
                </div>
            </div>
        </main>
    );
}
