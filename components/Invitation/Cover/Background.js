import Image from "next/image";

export default function Background() {
    return (
        <div className="absolute inset-0 z-0 flex flex-col">
            <div className="absolute w-full h-[50vh]">
                <Image
                    src="/img/02.jpeg"
                    alt="Couple Photo"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                />
            </div>
            <div className="absolute bottom-80 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#fef5e9]"></div>
        </div>
    )
}