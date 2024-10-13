import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium, FaInstagram } from "react-icons/fa"

export default function Footer() {
	const links = [
		{ href: "https://www.linkedin.com/in/elsa-catoire-11402753/", icon: FaLinkedin },
		{ href: "https://github.com/elsacatoire", icon: FaGithub },
		{ href: "https://www.instagram.com/elsa_des_bois/", icon: FaInstagram },
		{ href: "https://medium.com/@elsa.catoire", icon: FaMedium }
	];

	return (
		<footer className="bg-gray-200 shadow dark:bg-gray-800">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<span className="text-sm text-green-700 sm:text-left dark:text-gray-400">© 2023.
					<Link href="/" className="hover:underline">Elsa Catoire</Link>. All Rights Reserved.
					<p>Crafted with Next.js, TailwindCSS, and Markdown, using my own hands</p>
				</span>
				<ul className="flex flex-wrap items-center mt-8 text-sm font-medium text-green-700 dark:text-gray-400 sm:mt-0">
					{links.map((link, index) => (
						<li key={index} className="flex gap-1">
							<Link href={link.href} className="mr-5 hover:underline md:mr-10" target="_blank" rel="noopener noreferrer">
								<link.icon className="w-10 h-10" />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
