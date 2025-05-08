import {nunito_sans, inter, playball} from '@/app/font'
import {FaBookOpen, FaBookOpenReader} from "react-icons/fa6";


export default function Foreground({ handleOpenInvitation, guestName }) {
    return (
        <div className="relative flex flex-col z-10 text-center mt-[60vh]">
            <h2 className={`${nunito_sans.className} text-[16px] tracking-[1] font-bold text-[#333]`}>
                THE WEDDING OF
            </h2>
            <h1 className={`${playball.className} text-[40px] text-[#685952] my-4`}>Jonathan & Eva</h1>
            <p className={`${inter.className} text-[#333] text-[14px] leading-[1.4em]`}>Kepada Yth.<br/>{ guestName ? guestName : 'Bapak/Ibu/Saudara/i'}
            </p>
            <p className={`${inter.className} text-[10px] italic text-[#333] mt-4`}>
                *Mohon maaf jika ada kesalahan dalam penulisan nama / gelar
            </p>

            {/* Button */}
            <button onClick={handleOpenInvitation}
                    className="w-1/2 self-center mt-6 bg-[#685952] text-white rounded-full hover:bg-gray-900 transition flex items-center justify-center gap-2 px-5 py-1 min-w-[100px] delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                {/* Icon */}
                <FaBookOpen className="mr-2" />
                <span>Buka Undangan</span>
            </button>


            
        </div>
    )
}