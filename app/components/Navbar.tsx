"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navbarItems = [
	{ href: "/", label: "Accueil" },
	{ href: "/presentation", label: "Présentation" },
	{ href: "/posts", label: "Blog" },
	{ href: "/projets", label: "Projets" },
	{ href: "/voyages", label: "Voyages" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 p-2 sticky top-0 drop-shadow-xl z-10">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4">
				{/* Logo */}
				<Link href="/" className="flex items-center">
					<Image
						src="/images/logo.png"
						className="h-8 w-8 mr-5 md:h-12 md:w-12 md:mr-8"
						alt="Logo"
						width={100}
						height={100}
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap text-green-700 dark:text-white">
						Elsa Catoire
					</span>
				</Link>

				{/* Mobile Menu Button */}
				<button
					type="button"
					onClick={toggleMenu}
					className="md:hidden inline-flex items-center p-2 w-10 h-10 text-gray-500 dark:text-white hover:text-green-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu hamburger</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<svg
						className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Fermer le menu</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<div
					className={`w-full md:block md:w-auto ${
						isMenuOpen ? "block" : "hidden"
					}`}
				>
					<ul className="font-medium flex flex-col p-4 mt-4 rounded-lg bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						{navbarItems.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
