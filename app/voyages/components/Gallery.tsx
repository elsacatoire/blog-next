"use client";

import Image from "next/image";
import React, { useState } from "react";

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
	const [isOpen, setIsOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState<string | null>(null);

	const handleImageClick = (src: string) => {
		setCurrentImage(src);
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
		setCurrentImage(null);
	};

	return (
		<div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
				{images.map((image) => (
					<div key={image.src} className="aspect-square cursor-pointer">
						<Image
							className="object-cover w-full h-full rounded-lg"
							src={image.src}
							alt={image.alt}
							width={400}
							height={400}
							onClick={() => handleImageClick(image.src)}
							priority={true}
						/>
					</div>
				))}
			</div>

			{isOpen && currentImage && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
					<div className="relative max-w-full max-h-screen">
						<Image
							src={currentImage}
							alt="Image agrandie"
							width={800}
							height={800}
							className="object-contain rounded-lg max-w-full max-h-screen"
							style={{ width: "auto", height: "auto" }}
							priority={true}
						/>
						<button
							type="button"
							onClick={handleClose}
							className="absolute top-2 right-2 bg-white text-black rounded-full px-4 py-2"
						>
							X
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Gallery;
