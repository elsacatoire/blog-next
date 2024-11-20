import Image from "next/image";
import React from "react";

const images = [
	{ src: "/images/hike1.jpg", alt: "Hiking in the mountains" },
	{ src: "/images/gustave.jpg", alt: "Portrait of Gustave" },
	{ src: "/images/camp.jpg", alt: "Camping site" },
	{ src: "/images/athenes.jpg", alt: "View of Athens" },
	{ src: "/images/athos.jpg", alt: "Mount Athos" },
	{ src: "/images/hike2.jpg", alt: "Another hiking adventure" },
	{ src: "/images/carvan.jpg", alt: "Caravan in the desert" },
	{ src: "/images/greece.jpg", alt: "Beautiful Greece" },
];

const Gallery = () => {
	return (
		<main>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{images.map((image) => (
					<div key={image.src} className="aspect-ratio-1-1">
						<Image
							className="object-cover w-full h-full rounded-lg"
							src={image.src}
							alt={`Image ${image.alt}`}
							width={100}
							height={100}
						/>
					</div>
				))}
			</div>
		</main>
	);
};

export default Gallery;
