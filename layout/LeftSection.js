import FlowerFrame from "@/components/FlowerFrame/FlowerFrame";
import {nunito_sans, playball} from '@/app/font'

export default function LeftSection() {
    return (
        <div className="hidden md:flex relative flex-3 bg-[#f9f4f0] bg-cover flex-col justify-center items-center overflow-hidden"
            style={{
                backgroundImage: "url('img/bg-right-green.png')"
            }}
        >
            <FlowerFrame />

            {/* Text Content */}
            <div className="text-center p-8">
                <h2 className={`${nunito_sans.className} text-[20px] tracking-widest text-[#0d3e26]`}>THE WEDDING OF</h2>
                <h1 className={`${playball.className} text-[50px] text-[#3b5851] my-4`}>Jonathan & Eva</h1>
                <p className={`${nunito_sans.className} text-[#0d3e26]`}>Sabtu, 31 Mei 2025</p>
            </div>
        </div>
    );
}