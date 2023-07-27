import Image from "next/image"
type MyProfilePicProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
};

export default function MyProfilePic({ src, alt, width, height, priority = true }: MyProfilePicProps) {
    return (
        <section className="w-full mx-auto">
            <Image
                className="mx-auto mt-0"
                src={src}
                width={500}
                height={500}
                alt="Elsa Catoire"
                priority={true}
            />
        </section>

    )
}