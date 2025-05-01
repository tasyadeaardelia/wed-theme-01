import {nunito_sans, playball} from "@/app/font";
import Countdown from "@/components/Countdown";
import FlowerFrame from "@/components/FlowerFrame/FlowerFrame";
import ShortcutIcon from "@/components/ShortcutIcon";
import {FaCalendarDays} from "react-icons/fa6";
import {motion} from "framer-motion";

export default function Intro() {
    const saveDate = () => {
        const title = encodeURIComponent("Jo & Eva");
        const description = encodeURIComponent("Jangan lupa hadir ya!");
        const location = encodeURIComponent("Jl. Buku, No. 20, Sei Putih Tengah, Medan Petisah");

        // Format tanggal: YYYYMMDDTHHmmssZ (pakai UTC)
        const start = new Date("2025-05-31T10:00:00Z");
        const end = new Date("2025-05-31T12:00:00Z");

        const formatDate = (date) => {
            return date.toISOString().replace(/[-:]|\.\d{3}/g, "");
        };
        const dates = `${formatDate(start)}/${formatDate(end)}`;
        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${description}&location=${location}&sf=true&output=xml`;

        window.open(url, "_blank");
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center p-8 pb-20 bg-cover overflow-y-clip"
            style={{
                backgroundImage: "url('img/bg-right.jpg')"
            }}
        >
            <FlowerFrame flowerSize={120}/>
            <div className="text-center mt-8">
                <h2 className={`${nunito_sans.className} text-[16px] font-bold tracking-[1] text-[#333]`}>THE WEDDING OF</h2>

                <div className="relative w-48 h-48 mx-auto my-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img src="/img/01.jpeg" alt="Couple" className="object-cover w-full h-full" />
                </div>

                <h1 className={`${playball.className} text-4xl text-[#685952] my-4`}>Eva & Jonathan</h1>
                <p className={`${nunito_sans.className} text-[#333] mb-6`}>Sabtu, 31 Mei 2025</p>

                {/* Countdown */}
                <Countdown />

                {/* Save Date Button */}
                <button className={`${nunito_sans.className} mt-4 mx-auto px-5 py-2 bg-[#685952] text-white text-[14px] 
                    rounded-full hover:bg-gray-900 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 
                    hover:scale-110 flex items-center justify-center gap-2`} onClick={saveDate}>
                    <FaCalendarDays /> Simpan Tanggal
                </button>

                {/* Shortcut icons */}
                {/*<div className="flex justify-center gap-4 mt-8">*/}
                {/*    <ShortcutIcon emoji="🏠" />*/}
                {/*    <ShortcutIcon emoji="❤️" />*/}
                {/*    <ShortcutIcon emoji="📷" />*/}
                {/*    <ShortcutIcon emoji="📍" />*/}
                {/*    <ShortcutIcon emoji="🎉" />*/}
                {/*</div>*/}
            </div>
        </motion.div>
    )
}