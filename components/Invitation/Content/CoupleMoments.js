"use client"

import FlowerFrame from "@/components/FlowerFrame/FlowerFrame";
import {playball, nunito_sans} from "@/app/font";
import {useState} from "react";
import Image from "next/image";

const timestamp = Date.now();
const images = [
    `https://jova-admin.mantappdev.com/storage/photos/gallery-1.jpg?ts=${timestamp}`,
    `https://jova-admin.mantappdev.com/storage/photos/gallery-2.jpg?ts=${timestamp}`,
    `https://jova-admin.mantappdev.com/storage/photos/gallery-3.jpg?ts=${timestamp}`,
    `https://jova-admin.mantappdev.com/storage/photos/gallery-4.jpg?ts=${timestamp}`,
    `https://jova-admin.mantappdev.com/storage/photos/gallery-5.jpg?ts=${timestamp}`,
    `https://jova-admin.mantappdev.com/storage/photos/gallery-6.jpg?ts=${timestamp}`,
];

export default function CoupleMoments() {
    const [selectedImage, setSelectedImage] = useState(
       `https://jova-admin.mantappdev.com/storage/photos/gallery-2.jpg?ts=${timestamp}`,
    );

    return (
        <section className="relative flex justify-center items-start  flex-col bg-[#f9f4f0] py-20 px-4 pb-8 bg-cover overflow-y-clip"
            style={{
                backgroundImage: "url('img/bg-right-green.png')"
            }}
        
        >
            <FlowerFrame flowerSize={120} />
            <div className="relative z-10 max-w-xl mx-auto bg-[#FFFFFF95] border-solid
                border border-[#ffffffcc] transition-[background,border,border-radius,box-shadow] duration-300 mt-0
                mb-0 p-0 rounded-3xl shadow-lg py-10 px-8 text-center">
                <h2 className={`${playball.className} text-3xl text-[#3b5851] font-semibold mb-4`}>Our Moments</h2>
                <p className={`${nunito_sans.className} text-[#333] text-[16px] mb-4`}>
                    Anda pernah menghirup aroma kebahagiaan?. Jika anda pernah menghirupnya maka sama, kami juga sedang merasakannya. 
                    Come & join us to our wedding.
                    <br/>
                    <span className="italic">Jonathan & Eva 🕊️</span>
                </p>

                <div className="grid gap-4">
                    <div>
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={selectedImage}
                            alt="Selected"
                            width={600} height={80} quality={100}
                        />
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        {images.map((img, idx) => (
                            <div key={idx}>
                                <Image
                                    className="h-auto max-w-full rounded-lg cursor-pointer transition duration-200 ease-in-out hover:opacity-75 hover:scale-205"
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    width={100} height={100} quality={100}
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