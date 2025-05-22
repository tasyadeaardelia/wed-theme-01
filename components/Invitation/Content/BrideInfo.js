import {nunito_sans, playball} from "@/app/font";
import {FaInstagram} from "react-icons/fa6";
import Image from "next/image";

export default function BrideInfo() {
    const timestamp = Date.now();
    return (
        <>
            <div className="mt-8 flex justify-center">
                <Image
                    src="/img/bride.jpg"
                    alt="Eva"
                    className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
                    width={160}
                    height={160}
                />
            </div>
            <h4 className={`${playball.className} mt-6 text-2xl text-[#3b5851]`}>Sri Eva Swastika Br. Napitupulu, S.Pd</h4>
            
            <p className={`${nunito_sans.className} mt-2 text-[#333] text-[14px]`}>
                <span className="font-bold">Putri dari</span><br />
                Bapak H. Napitupulu dan Ibu N. Silitonga
            </p>

            
            <a 
                href="https://instagram.com/epaswasnapitupulu"
                target="_blank" 
                rel="noopener noreferrer"
                className={`${nunito_sans.className} inline-flex items-center justify-center mt-4 px-5 py-2 bg-[#3b5851] text-white text-[11px] rounded-full hover:bg-[#3b5851] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`}
            >
                <FaInstagram className="mr-2 text-base"/> Instagram
            </a>
        </>
    )
}