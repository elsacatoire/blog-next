import { getSortedProjectsData } from "@/lib/projects"
import ListItemProject from "./ListItemProjects"

export default function ProjectPosts() {
    const posts = getSortedProjectsData()
    return (
        <section className="mt-10 mx-auto">
            <div className="w-full grid lg:grid-cols-2 gap-3">
                {posts.map(post => (
                    <ListItemProject key={post.id} post={post} />
                ))}
            </div>
        </section>
    )
}