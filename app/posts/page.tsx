import Posts from "../components/Posts"

export default function PostsPage() {
    return (
        <main className="px-6 ml-20 mr-20 mb-10">
            <div className="mt-10 text-lg text-left block max-w-m p-6 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="mt-10 text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Parfois je pense, parfois j&apos;écris, parfois je rien
                </h5>
                <div>
                    <Posts />
                </div>
            </div>

        </main>
    )
}
