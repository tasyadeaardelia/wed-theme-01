import FlowerFrame from "@/components/FlowerFrame/FlowerFrame";
import {galada, nunito_sans, playball} from "@/app/font";
import {FaMapLocationDot, FaRegHourglassHalf} from "react-icons/fa6";
import {FaClock, FaTimes} from "react-icons/fa";

export default function WeddingInfo() {
    return (
        <section
            className={`${nunito_sans.className} relative flex flex-col justify-center items-center bg-[#3b5851] py-20 px-10 pb-8`}>
            {/* Pemberkatan Pernikahan */}
            <div className="relative z-0 max-w-md w-full bg-[#f9f4f0] rounded-3xl shadow-lg p-8 mb-8 text-center overflow-hidden bg-cover"
                style={{backgroundImage: "url('img/bg-right-green.png')"}}
            >
                <FlowerFrame flowerSize={100}/>

                <h2 className={`${playball.className} text-[32px] text-[#3b5851] mb-4 mt-5`}>Pemberkatan Pernikahan</h2>

                <div className="flex items-center justify-center text-[#3b5851] mb-6">
                    <div className="text-center mr-6">
                        <p className="text-base">Sabtu</p>
                    </div>

                    <div className="h-15 border-1 border-[#333] mr-2"></div>

                    <div className="flex flex-col items-center mx-4 mr-6">
                        <p className="text-5xl font-bold">31</p>
                        <p className="text-base mt-2">2025</p>
                    </div>

                    <div className="h-15 border-1 border-[#333] mr-4"></div>

                    <div className="text-center ml-4">
                        <p className="text-base">Mei</p>
                    </div>
                </div>

                <div className="text-[#3b5851] font-bold text-base mb-6">
                    <p className="flex items-center justify-center gap-2">
                        <FaClock/> 10:00 WIB
                    </p>
                </div>

                <div className="text-[#3b5851] mb-6">
                    <h3 className="font-bold">Lokasi Acara</h3>
                    <p className="font-semibold mt-2">HKBP Pasar Melintang</p>
                    <p className="text-sm text-[#333]">Jl. Buku, No. 20, Sei Putih Tengah, Medan Petisah</p>
                </div>

                <div>
                    <a
                        href="https://maps.app.goo.gl/ignAw6vpr8AqTF3V6"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-[#3b5851] text-white px-4 py-1 rounded-full text-sm hover:bg-[#3b5851] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    >
                        <FaMapLocationDot/>Google Maps
                    </a>
                </div>
            </div>

            {/* Resepsi */}
            <div
                className="relative z-0 max-w-md w-full bg-[#f9f4f0] rounded-3xl shadow-lg p-8 text-center overflow-hidden bg-cover"
                style={{
                    backgroundImage: "url('img/bg-right-green.png')"
                }}
            >
                <FlowerFrame flowerSize={100}/>

                <h2 className={`${playball.className} text-[32px] text-[#3b5851] mb-4 mt-5`}>Resepsi</h2>

                <div className="flex items-center justify-center text-[#3b5851] mb-6">
                    <div className="text-center mr-6">
                        <p className="text-base">Sabtu</p>
                    </div>

                    <div className="h-15 border-1 border-[#333] mr-2"></div>

                    <div className="flex flex-col items-center mx-4 mr-6">
                        <p className="text-5xl font-bold">31</p>
                        <p className="text-base mt-2">2025</p>
                    </div>

                    <div className="h-15 border-1 border-[#333] mr-4"></div>

                    <div className="text-center ml-4">
                        <p className="text-base">Mei</p>
                    </div>
                </div>

                <div className="text-[#3b5851] font-bold text-base mb-6">
                    <p className="flex items-center justify-center gap-2">
                        <FaClock/> 13:00 WIB
                    </p>
                </div>

                <div className="text-[#3b5851] mb-6">
                    <h3 className="font-bold">Lokasi Acara</h3>
                    <p className="font-semibold mt-2">Wisma Angkola</p>
                    <p className="text-sm text-[#333]">Jl. Cangkir No.8, Sei Putih Tengah, Medan Petisah</p>
                </div>

                <div>
                    <a
                        href="https://maps.app.goo.gl/r4PixGx5b3Mt8bVE9"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-[#3b5851] text-white px-4 py-1 rounded-full text-sm hover:bg-[#3b5851] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    >
                        <FaMapLocationDot/>Google Maps
                    </a>
                </div>
            </div>
        </section>
    )
}