import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"
import Link from "next/link"

export default function Posts2() {
    const posts = getSortedPostsData().slice(-2)
    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold
             dark:text-white/90">Deux derniers articles :</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
            <Link className="underline text-green-700" href="/posts">Voir tous les projets</Link>
        </section>
    )
}