import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
	title: "Elsa Catoire",
	description: "writting and projects",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-green-900 dark:bg-slate-700 text-gray-200">
				<Navbar />
				<main className="p-2 md:px-5 md:py-5 md:mx-auto md:max-w-screen-lg">
					<div className="p-4 md:p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
						{children}
					</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
