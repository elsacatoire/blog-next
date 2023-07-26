import { getSortedPostsData } from "@/lib/posts"
import ListItemProject from "./ListItemProjects"

export default function Posts() {
    const posts = getSortedPostsData()
    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold
             dark:text-white/90">Les articles du blog</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItemProject key={post.id} post={post} />
                ))}

            </ul>
        </section>
    )
}