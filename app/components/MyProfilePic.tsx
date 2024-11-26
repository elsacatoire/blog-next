import Image from "next/image";
type MyProfilePicProps = {
	imgPath: string;
	alt: string;
	width: number;
	height: number;
};

export default function MyProfilePic({
	imgPath,
	alt,
	width,
	height,
}: MyProfilePicProps) {
	return (
		<section className="w-full border border-gray-200 rounded-lg shadow">
			<Image
				className="mx-auto mt-0 rounded-lg"
				src={imgPath}
				width={width}
				height={height}
				alt={alt}
			/>
		</section>
	);
}
