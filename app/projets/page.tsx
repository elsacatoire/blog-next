import MarkdownLoader from "../components/MarkdownLoader";
import ProjectPosts from "./components/ProjectPosts";

export default function Projects() {
	return (
		<div className="flex flex-col items-center gap-4 flex-wrap">
			<h1 className="text-center text-lg md:text-2xl font-bold text-gray-900">
				Mes projets professionnels et d&rsquo;apprentissage,
			</h1>
			<MarkdownLoader filePath="/content/project-content.md" />
			<ProjectPosts />
		</div>
	);
}
