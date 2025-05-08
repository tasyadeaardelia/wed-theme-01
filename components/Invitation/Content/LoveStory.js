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
                        <div className="bg-white rounded-full p-3 shadow-lg border-2 border-[#69564B] z-10">
                            <span className="text-2xl text-[#69564B]">❤️</span>
                        </div>

                        {/* Vertical line */}
                        <div className="w-px bg-[#69564B]/50 flex-1 mt-2 mb-2"></div>
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
                        <div className="bg-white rounded-full p-3 shadow-lg border-2 border-[#69564B] z-10">
                        <span className="text-2xl text-[#69564B]">❤️</span>
                        </div>

                        {/* Vertical line */}
                        <div className="w-px bg-[#69564B]/50 flex-1 mt-2 mb-2"></div>
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
                        <div className="bg-white rounded-full p-3 shadow-lg border-2 border-[#69564B] z-10">
                            <span className="text-2xl text-[#69564B]">❤️</span>
                        </div>

                        {/* Vertical line */}
                        <div className="w-px bg-[#69564B]/50 flex-1 mt-2 mb-2"></div>
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