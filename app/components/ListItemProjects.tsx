import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"
import Image from "next/image"

type Props = {
    post: ProjectPost
}

export default function ListItemProject({ post }: Props) {
    const { id, title, date, stack, image } = post
    const formattedDate = getFormattedDate(date)

    return (

        <Link className="mt-5 flex flex-col items-center bg-gray-200 border border-green-700 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" href={`/projets/${id}`}>
            <Image className="imgProject" src={image} alt="" width={192} height={192} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <h6 className="text-green-900">{stack}</h6>
                <p className="text-left mt-7 mb-3 font-normal text-green-700 dark:text-gray-400">{formattedDate}</p>
            </div>
        </Link>

    )
}