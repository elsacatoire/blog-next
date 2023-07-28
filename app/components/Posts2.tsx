import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"
import Link from "next/link"

export default function Posts2() {
    const posts = getSortedPostsData().slice(0, 2)
    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mes deux derniers articles</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
            <Link className="underline text-green-700" href="/posts">Les articles &rarr;</Link>
        </section>
    )
}