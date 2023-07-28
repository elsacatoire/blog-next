import Link from "next/link"

export default function Contact() {
    return (
        <main className="px-6 mb-10 mt-10 mr-20 ml-20">
            <div className="p-20 text-lg text-left block max-w-m text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Curieuse et ouverte la conversation, n&rsquo;hésitez pas à me contacter
                </h5>
                <br />
                <div className="justify-center flex felx-wrap mt-12 ">
                    <div className="block w-full md:w-1/3 md:order-1 mr-3 max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technos &#9829;</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; JavaScript/HYML/CSS</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; TypeScript, Next.js</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Python</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; NoSQL avec MongoDB</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; API REST</p>
                    </div>
                    <div className="block w-full md:w-1/3 md:order-2 mr-3 max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">J&rsquo;apprends aussi</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Java</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; PHP</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; SQL</p>
                    </div>
                    <div className="block w-full md:w-1/3 md:order-3 max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backlog</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Django, FAST API</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Dev mobile</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Docker</p>
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
