import FlowerFrame from "@/components/FlowerFrame/FlowerFrame";
import {nunito_sans, playball} from "@/app/font";
import Image from "next/image";

export default function LoveStory() {
    return (
        <section className={`${nunito_sans.className} relative py-20 bg-[#f9f4f0] bg-cover overflow-y-clip`}
            style={{
                backgroundImage: "url('img/bg-right.jpg')"
            }}
        >
            <FlowerFrame flowerSize={120} />

            <div className="relative max-w-4xl mx-auto px-6">
                <h2 className={`${playball.className} text-3xl text-center text-[#69564B] mb-12`}>Love Story</h2>

                <div className="relative flex items-start mx-auto pb-8">
                
                    {/* Timeline vertical line */}
                    <div className="flex flex-col items-center mr-6 relative">
                        {/* Heart icon */}
                        <div className="w-12 h-12 bg-[#69564B] rounded-full flex items-center justify-center shadow-lg z-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M12.001 4.529c2.349-2.532 6.149-2.53 8.497 0 2.174 2.345 2.204 6.093.086 8.465l-7.293 7.63a1.001 1.001 0 0 1-1.48 0l-7.293-7.63c-2.118-2.372-2.088-6.12.086-8.465 2.349-2.53 6.149-2.532 8.497 0z" />
                            </svg>
                        </div>

                        {/* Timeline Line */}
                        <div className="relative h-[60vh] mt-2 mb-2 w-px">
                            {/* Brown filled part */}
                            <div className="absolute w-px bg-[#69564B] h-full top-0"></div>
                            {/* Faded base line */}
                            <div className="absolute w-px bg-[#69564B]/10 h-full top-0"></div>
                        </div>
                    </div>

                    {/* Story Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl">
                        <div className="overflow-hidden rounded-xl mb-4">
                            <Image src="https://jova-admin.mantappdev.com/storage/photos/love_story-1.jpg" alt="Love Story" className="w-full h-50 object-cover" width={200} height={200} />
                        </div>
                        <h3 className="text-lg font-bold text-[#685952] mb-2">25 AGUSTUS 2023</h3>
                        <p className="text-[#333] text-sm">
                            Berawal dari tempat pekerjaan Cianjur-2023, kami mengenal satu sama lain
                            dan belum ada benih cinta kala itu, hanya sebatas teman kerja.
                        </p>
                    </div>

                </div>

                <div className="relative flex items-start mx-auto pb-8">
                
                    {/* Timeline vertical line */}
                    <div className="flex flex-col items-center mr-6 relative">
                        {/* Heart icon */}
                        <div className="w-12 h-12 bg-[#69564B] rounded-full flex items-center justify-center shadow-lg z-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M12.001 4.529c2.349-2.532 6.149-2.53 8.497 0 2.174 2.345 2.204 6.093.086 8.465l-7.293 7.63a1.001 1.001 0 0 1-1.48 0l-7.293-7.63c-2.118-2.372-2.088-6.12.086-8.465 2.349-2.53 6.149-2.532 8.497 0z" />
                            </svg>
                        </div>

                        {/* Timeline Line */}
                        <div className="relative h-[60vh] mt-2 mb-2 w-px">
                            {/* Brown filled part */}
                            <div className="absolute w-px bg-[#69564B] h-full top-0"></div>
                            {/* Faded base line */}
                            <div className="absolute w-px bg-[#69564B]/10 h-full top-0"></div>
                        </div>
                    </div>

                    {/* Story Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl">
                        <div className="overflow-hidden rounded-xl mb-4">
                        <Image src="https://jova-admin.mantappdev.com/storage/photos/love_story-2.jpg" alt="Love Story" className="w-full h-50 object-cover" width={200} height={200} />
                        </div>
                        <h3 className="text-lg font-bold text-[#685952] mb-2">25 AGUSTUS 2023</h3>
                        <p className="text-[#333] text-sm">
                        Berawal dari tempat pekerjaan Cianjur-2023, kami mengenal satu sama lain
                        dan belum ada benih cinta kala itu, hanya sebatas teman kerja.
                        </p>
                    </div>

                </div>

                <div className="relative flex items-start mx-auto">
                
                    {/* Timeline vertical line */}
                    <div className="flex flex-col items-center mr-6 relative">
                        {/* Heart icon */}
                        <div className="w-12 h-12 bg-[#69564B] rounded-full flex items-center justify-center shadow-lg z-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M12.001 4.529c2.349-2.532 6.149-2.53 8.497 0 2.174 2.345 2.204 6.093.086 8.465l-7.293 7.63a1.001 1.001 0 0 1-1.48 0l-7.293-7.63c-2.118-2.372-2.088-6.12.086-8.465 2.349-2.53 6.149-2.532 8.497 0z" />
                            </svg>
                        </div>

                        {/* Timeline Line */}
                        <div className="relative h-[60vh] mt-2 mb-2 w-px">
                            {/* Brown filled part */}
                            {/* <div className="absolute w-px bg-[#69564B] h-full top-0"></div> */}
                            {/* Faded base line */}
                            {/* <div className="absolute w-px bg-[#69564B]/10 h-full top-0"></div> */}
                        </div>
                    </div>

                    {/* Story Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl">
                        <div className="overflow-hidden rounded-xl mb-4">
                            <Image src="https://jova-admin.mantappdev.com/storage/photos/love_story-3.jpg" alt="Love Story" className="w-full h-50 object-cover" width={200} height={200} />
                        </div>
                        <h3 className="text-lg font-bold text-[#685952] mb-2">25 AGUSTUS 2023</h3>
                        <p className="text-[#333] text-sm">
                            Berawal dari tempat pekerjaan Cianjur-2023, kami mengenal satu sama lain
                            dan belum ada benih cinta kala itu, hanya sebatas teman kerja.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}