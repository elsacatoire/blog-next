"use client";
import matter from "gray-matter"; // Importer gray-matter
import type React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type MarkdownLoaderProps = {
	filePath: string;
};

const MarkdownLoader: React.FC<MarkdownLoaderProps> = ({ filePath }) => {
	const [content, setContent] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMarkdown = async () => {
			try {
				const response = await fetch(filePath);
				if (!response.ok) {
					throw new Error(`Erreur lors du chargement du fichier : ${filePath}`);
				}
				const text = await response.text();

				// Use gray-matter to extract metadata
				const { content } = matter(text);
				setContent(content);
				setIsLoading(false);
			} catch (err) {
				const errorMessage =
					err instanceof Error
						? err.message
						: "Une erreur inconnue est survenue";
				console.error(errorMessage);
				setError(errorMessage);
				setIsLoading(false);
			}
		};

		fetchMarkdown();
	}, [filePath]);

	if (isLoading) {
		return <p>Chargement du contenu...</p>;
	}

	if (error) {
		return <p className="text-red-500">Erreur : {error}</p>;
	}

	return (
		<ReactMarkdown className="prose max-w-none dark:prose-dark mx-auto">
			{content}
		</ReactMarkdown>
	);
};

export default MarkdownLoader;
