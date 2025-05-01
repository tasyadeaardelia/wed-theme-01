import FlowerFrame from "@/components/FlowerFrame/FlowerFrame";
import {playball} from "@/app/font";
import {useState} from "react";
import Image from "next/image";

const images = [
    "/img/01.jpeg",
    "/img/02.jpeg",
    "/img/03.jpeg",
    "/img/04.jpeg",
];

export default function CoupleMoments() {
    const [selectedImage, setSelectedImage] = useState(
        "/img/01.jpeg"
    );

    return (
        <section className="relative flex justify-center items-start  flex-col bg-[#f9f4f0] py-20 px-4 pb-8 bg-cover overflow-y-clip"
            style={{
                backgroundImage: "url('img/bg-right.jpg')"
            }}
        
        >
            <FlowerFrame flowerSize={120} />
            <div className="relative z-10 max-w-xl mx-auto bg-[#FFFFFF95] border-solid
                border border-[#ffffffcc] transition-[background,border,border-radius,box-shadow] duration-300 mt-0
                mb-0 p-0 rounded-3xl shadow-lg py-10 px-8 text-center">
                <h2 className={`${playball.className} text-3xl text-[#685952] font-semibold mb-4`}>Our Moments</h2>

                <div className="grid gap-4">
                    <div>
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={selectedImage}
                            alt="Selected"
                            width={600} height={80}
                        />
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        {images.map((img, idx) => (
                            <div key={idx}>
                                <Image
                                    className="h-auto max-w-full rounded-lg cursor-pointer transition duration-200 ease-in-out hover:opacity-75 hover:scale-205"
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    width={100} height={100}
                                    onClick={() => setSelectedImage(img)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </section>
    )
}