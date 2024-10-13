import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
				<main className="py-5 mx-2 md:px-5 md:py-5 md:mx-auto md: max-w-screen-lg">
					{children}
				</main>

				<Footer />
			</body>
		</html>
	);
}
