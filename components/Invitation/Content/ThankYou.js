import FlowerFrame from "@/components/FlowerFrame/FlowerFrame";
import {nunito_sans, playball, sora} from "@/app/font";
import Image from "next/image";

export default function ThankYou() {
    const timestamp = Date.now(); // Akan berubah setiap render

    return (
        <section className="relative flex justify-center items-start  flex-col bg-[#f9f4f0] py-20 px-4 pb-8 bg-cover overflow-y-clip"
            style={{
                backgroundImage: "url('img/bg-right-green.png')"
            }}
        >
            <FlowerFrame flowerSize={120} />

            <div className="relative z-10 max-w-xl mx-auto bg-[#FFFFFF95] border-solid border border-[#ffffffcc] transition-[background,border,border-radius,box-shadow] duration-300 mt-0 mb-0 p-0 rounded-3xl shadow-lg py-10 px-8 text-center">
                <div className="mt-8 mb-2 flex justify-center">
                    <Image
                        src={`https://jova-admin.mantappdev.com/storage/photos/thank-you.jpg?ts=${timestamp}`}
                        alt="Couple"
                        width={500} height={500}
                        quality={100}
                        className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-md"
                        />
                </div>
                <h2 className={`${nunito_sans.className} text-[16px] font-semibold mt-4 mb-4 text-[#3b5851]`}>Terima kasih</h2>
                <p className={`${nunito_sans.className} text-[#333] text-[16px]`}>
                    Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, 
                    berkenan hadir dan memberikan do’a restu kepada kami.
                </p>

            
                {/* Deskripsi Anak */}
                <p className={`${nunito_sans.className} font-semibold text-[#3b5851]`}>
                    See you on our wedding day!
                </p>

                <h4 className={`${playball.className} mt-4 font-bold text-2xl text-[#3b5851]`}>Jonathan & Eva</h4>
            </div>
        </section>
    )
}