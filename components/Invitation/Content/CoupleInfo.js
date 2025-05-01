import FlowerFrame from "@/components/FlowerFrame/FlowerFrame";
import BrideInfo from "./BrideInfo";
import GroomInfo from "./GroomInfo";
import {nunito_sans, playball} from "@/app/font";

export default function CoupleInfo() {
    return (
        <section className="relative flex justify-center items-start flex-col bg-[#f9f4f0] py-20 px-4 pb-8 bg-cover overflow-y-clip"
            style={{
                backgroundImage: "url('img/bg-right.jpg')"
            }}
        >
            <FlowerFrame flowerSize={120} />

            {/* Couple Info */}
            <div className="relative z-10 max-w-xl mx-auto bg-[#FFFFFF95] border-solid border border-[#ffffffcc] transition-[background,border,border-radius,box-shadow] duration-300 mt-0 mb-0 p-0 rounded-3xl shadow-lg py-10 px-8 text-center">
                <h2 className={`${nunito_sans.className} text-[16px] font-extrabold mb-4 text-[#333]`}>Salam Sejahtera</h2>
                <p className={`${nunito_sans.className} text-[#333] text-[16px]`}>
                    Dengan segala kerendahan hati dan dengan ungkapan syukur atas karunia Tuhan, 
                    kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami.
                    Kehadiran dan doa restu Anda merupakan kehormatan dan kebahagiaan bagi kami.
                </p>
                <BrideInfo />
                {/* Separator & */}
                <div className="my-8">
                    <span className={`${playball.className} text-[32px] font-bold text-[#685952]`}>&amp;</span>
                </div>
                <GroomInfo />
            </div>
        </section>
    )
}