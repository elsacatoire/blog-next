import Image from "next/image"

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto">
            <Image
                className="mx-auto mt-0"
                src="/images/profile.jpg"
                width={400}
                height={400}
                alt="Elsa Catoire"
                priority={true}
            />
        </section>

    )
}