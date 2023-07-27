import Posts from "../components/Posts"

export default function PostsPage() {
    return (
        <main className="px-6 mx-auto">
            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                Parfois je pense, parfois j&apos;écris, parfois je rien

                Tous les articles :
            </p>
            <div>
                <Posts />
            </div>

        </main>
    )
}
