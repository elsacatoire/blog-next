import Gallery from "../components/Gallery";

export default function Voyages() {
    return (
        <main className="px-6 mb-10 mt-10 mr-20 ml-20">
            <div className="mb-10 text-lg text-left block max-w-m p-6 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pérégrinations &#9829;</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Environ 2 ans de voayges et bénévolats sur les routes d&rsquo;Europe. Du Portugual à la Turquien en passant par l&rsquo;Albanie et enrentrant par la Slovaquie... Un voyage immerdif, en solo, auonome et libre.</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">- Python</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">- NoSQL avec MongoDB</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">- API REST</p>
            </div>
            <div>
                <Gallery />
            </div>
        </main>
    )
}
