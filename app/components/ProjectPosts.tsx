import { getSortedProjectsData } from "@/lib/projects"
import ListItemProject from "./ListItemProjects"

export default function ProjectPosts() {
    const posts = getSortedProjectsData()
    return (
        <section className="mt-6 mx-auto max-w-2xl">

            <div className="flex flex-wrap justify-center"></div>
            {posts.map(post => (
                <ListItemProject key={post.id} post={post} />
            ))}
        </section>
    )
}