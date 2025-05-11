import Image from "next/image";

export default function Background() {
    return (
        <div className="absolute inset-0 z-0 flex flex-col">
            <div className="absolute w-full h-full">
                <Image
                    src={`https://jova-admin.mantappdev.com/storage/photos/cover.jpg?ts=${Date.now()}`}
                    alt="Couple Photo"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                    priority
                />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-transparent to-[#fef5e9]"></div>
        </div>
    )
}