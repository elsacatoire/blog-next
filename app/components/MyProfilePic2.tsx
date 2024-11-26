import Image from "next/image";

export default function MyProfilePic2() {
	return (
		<section className="w-full mx-autorounded-lg shadow">
			<Image
				className="drop-shadow-xl
                  shadow-black mx-auto rounded-lg"
				src="/images/profileD.jpg"
				width={300}
				height={300}
				alt="Elsa Catoire"
			/>
		</section>
	);
}
