import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import getFormattedDate from '@/lib/getFormattedDate'
import Link from "next/link";
import Image from "next/image";
import { log } from "console";

export function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params


    if (!posts.find(post => post.id === postId)) notFound()

    const { title, date, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto mb-30">
            <h1 className="text-3xl mt-8 mb-8">{title}</h1>
            <p className="mt-0 mb-4">
                {pubDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p className="mb-8 mt-8 text-xl">
                    <Link href="/posts">← Retour aux articles</Link>
                </p>
            </article>
        </main>
    )
}