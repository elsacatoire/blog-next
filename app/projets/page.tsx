
import ProjectPosts from "../components/ProjectPosts"

export default function Projects() {
    return (
        <main className="px-6 mx-auto">
            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                Retrouvez mes derniers projets
            </p>
            <div>
                <ProjectPosts />
            </div>

        </main>
    )
}