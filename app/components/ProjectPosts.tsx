import { getSortedProjectsData } from "@/lib/projects"
import ListItemProject from "./ListItemProjects"

export default function ProjectPosts() {
    const posts = getSortedProjectsData()
    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold
             dark:text-white/90">Mes projets d&rsquo;apprentissage</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItemProject key={post.id} post={post} />
                ))}

            </ul>
        </section>
    )
}