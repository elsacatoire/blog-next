import { getSortedProjectsData } from "@/lib/projects"
import ListItemProject from "./ListItemProjects"
import Link from "next/link"

export default function ProjectPosts2() {
    const posts = getSortedProjectsData().slice(-2)
    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold
             dark:text-white/90">Deux derniers projets</h2>
            <ul className="w-full mb-3">
                {posts.map(post => (
                    <ListItemProject key={post.id} post={post} />
                ))}
            </ul>
            <Link className="underline text-green-700" href="/projets">Voir tous les projets</Link>

        </section>
    )
}