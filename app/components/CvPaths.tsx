import Link from "next/link";
import type React from "react";

const CvPaths: React.FC = () => {
	return (
		<div>
			<p className="text-xl font-semibold text-green-700 dark:text-gray-400">
				&#x1F49C;Afficher mon CV
			</p>
			<Link href="https://drive.proton.me/urls/P0SAR2441M#HGm5EdmfLPZS">
				<p className="font-normal text-gray-700 dark:text-gray-400">
					&#x2022; <span className="underline">Version française</span>
				</p>
			</Link>
			<Link href="https://drive.google.com/file/d/1uh-C1mp-7bGBXiuJBzGnv7hlpCzODDpg/view?usp=drive_link">
				<p className="font-normal text-gray-700 dark:text-gray-400">
					&#x2022; <span className="underline">English version</span>
				</p>
			</Link>
		</div>
	);
};

export default CvPaths;
