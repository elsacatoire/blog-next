import Link from "next/link";
import type React from "react";

const CvPaths: React.FC = () => {
	return (
		<div>
			<p className="text-xl font-semibold text-green-700 dark:text-gray-400">
				&#x1F49C;Afficher mon CV
			</p>
			<Link href="https://drive.proton.me/urls/ZEXEJJZ36M#aldflL6yL6AJ">
				<p className="font-normal text-gray-700 dark:text-gray-400">
					&#x2022; <span className="underline">Version française (25.01)</span>
				</p>
			</Link>
			<Link href="https://drive.proton.me/urls/3QB7DRE3VG#L3TGRyuXdSW4">
				<p className="font-normal text-gray-700 dark:text-gray-400">
					&#x2022; <span className="underline">English version (25.01)</span>
				</p>
			</Link>
		</div>
	);
};

export default CvPaths;
