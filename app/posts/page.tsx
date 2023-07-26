import Posts from "../components/Posts"

export default function posts() {
    return (
        <main className="px-6 mx-auto">
            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                Here are my articles
            </p>
            <div>
                <Posts />
            </div>

        </main>
    )
}
