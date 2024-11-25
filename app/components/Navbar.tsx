import Image from "next/image";
import Link from "next/link";

const navbarItems = [
	{ href: "/", label: "Accueil" },
	{ href: "/presentation", label: "Présentation" },
	{ href: "/posts", label: "Blog" },
	{ href: "/projets", label: "Projets" },
	{ href: "/voyages", label: "Voyages" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	return (
		<nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 md:p-2 sticky top-0 drop-shadow-xl z-10">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4">
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

				<div className="w-full md:block md:w-auto" id="navbar-default">
					<ul className="md:font-medium flex md:p-4 mt-4 rounded-lg bg-gray-200 flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						{navbarItems.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="block md:py-2 md:pl-3 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
