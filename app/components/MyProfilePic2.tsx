import Image from "next/image"

export default function () {
    return (
        <section className="w-full mx-auto">
            <Image
                className="drop-shadow-xl
                  shadow-black mx-auto mt-8"
                src="/images/profileD.jpg"
                width={300}
                height={300}
                alt="Elsa Catoire"
                priority={true}
            />
        </section>

    )
}