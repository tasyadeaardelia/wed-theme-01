import {nunito_sans, playball} from "@/app/font";
import {FaInstagram} from "react-icons/fa6";
import Image from "next/image";

export default function BrideInfo() {
    return (
        <>
            <div className="mt-8 flex justify-center">
                <Image
                    src="/img/04-02.jpg"
                    alt="Eva"
                    className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
                    width={100}
                    height={100}
                />
            </div>
            <h4 className={`${playball.className} mt-6 text-2xl text-[#685952]`}>Eva</h4>
            
            <p className={`${nunito_sans.className} mt-2 text-[#333] text-[14px]`}>
                <span className="font-bold">Putri dari</span><br />
                Bapak A dan Ibu B
            </p>

            
            <a 
                href="https://instagram.com/epaswasnapitupulu"
                target="_blank" 
                rel="noopener noreferrer"
                className={`${nunito_sans.className} inline-flex items-center justify-center mt-4 px-5 py-2 bg-[#685952] text-white text-[11px] rounded-full hover:bg-[#463b36] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`}
            >
                <FaInstagram className="mr-2 text-base"/> Instagram
            </a>
        </>
    )
}