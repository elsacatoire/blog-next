import { getSortedProjectsData } from "@/lib/projects"
import ListItemProject from "./ListItemProjects"
import Link from "next/link"

export default function ProjectPosts2() {
    const posts = getSortedProjectsData().slice(0, 2)
    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-center text-green-400
             dark:text-white/90">Mes deux derniers projets</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItemProject key={post.id} post={post} />
                ))}
            </ul>
            <Link className="underline text-green-400" href="/projets">Les projets  &rarr;</Link>

        </section>
    )
}