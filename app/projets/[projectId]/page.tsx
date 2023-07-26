import { getProjectData, getSortedProjectsData } from "@/lib/projects";
import { notFound } from "next/navigation";
import getFormattedDate from '@/lib/getFormattedDate'
import Link from "next/link";

export function generateMetadata({ params }: { params: { projectId: string } }) {

    const projects = getSortedProjectsData()
    const { projectId: projectId } = params

    const project = projects.find(project => project.id === projectId)

    if (!project) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: project.title,
    }
}

export default async function Project({ params }: { params: { projectId: string } }) {

    const projects = getSortedProjectsData()
    const { projectId: projectId } = params

    console.log("projectId:", projectId);
    console.log("projects:", projects);

    if (!projects.find(project => project.id === projectId)) notFound()

    const { title, date, contentHtml } = await getProjectData(projectId)

    const pubDate = getFormattedDate(date)

    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">
                {pubDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    )
}