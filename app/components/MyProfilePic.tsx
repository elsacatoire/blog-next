import Image from "next/image";
/* type MyProfilePicProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
};

export default function MyProfilePic(
	/* { src, alt, width, height, priority = true }: MyProfilePicProps */
) {
    return (
        <section className="w-full border border-gray-200 rounded-lg shadow">
            <Image
                className="mx-auto mt-0 rounded-lg"
                src="/images/profile.jpg"
                width={600}
                height={600}
                alt="Elsa Catoire"
                priority={true}
            />
        </section>
    );
}
