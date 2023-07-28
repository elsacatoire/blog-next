import React from "react";

const images = [
    "/images/hike1.jpg",
    "/images/chat.jpg",
    "/images/camp.jpg",
    "/images/athenes.jpg",
    "/images/athos.jpg",
    "/images/hike2.jpg",
    "/images/carvan.jpg",
    "/images/greece.jpg",
    // Add more image URLs here
];

const Gallery = () => {
    return (
        <main >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="aspect-ratio-1-1">
                        <img className="object-cover w-full h-full rounded-lg" src={image} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Gallery;
