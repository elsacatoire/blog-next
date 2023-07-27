import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

export default function Posts() {
    const posts = getSortedPostsData()
    return (
        <section className="mt-6 mx-auto">
            <h2 className="text-2xl text-center mb-5
             dark:text-white/90">Les articles du blog</h2>
            <ul className="w-full grid lg:grid-cols-2 gap-3">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}

            </ul>
        </section>
    )
}