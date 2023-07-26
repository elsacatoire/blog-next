import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium, FaInstagram } from "react-icons/fa"

export default function Footer() {
    return (

        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-green-700 sm:text-left dark:text-gray-400">© 2023.
                    <Link href="/" className="hover:underline">Elsa Catoire</Link>. All Rights Reserved.
                    <p>Created with my own hands with Next.js and Tailwind</p>
                </span>
                <ul className="flex flex-wrap items-center mt-8 text-sm font-medium text-green-700 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="https://www.linkedin.com/in/elsa-catoire-11402753/" className="mr-5 hover:underline md:mr-10" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-10 h-10 m-2" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/elsacatoire" className="mr-5 hover:underline md:mr-10" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-10 h-10 m-2" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/elsa_des_bois/" className="mr-5 hover:underline md:mr-10" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-10 h-10 m-2" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://medium.com/@elsa.catoire" className="mr-5 hover:underline md:mr-10" target="_blank" rel="noopener noreferrer">
                            <FaMedium className="w-10 h-10 m-2" />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}