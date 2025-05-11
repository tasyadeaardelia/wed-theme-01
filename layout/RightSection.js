'use client'

import Content from "@/components/Invitation/Content/Content";
import Cover from "@/components/Invitation/Cover/Cover";
import {useRef, useState} from "react"
import {FaMusic, FaPause} from "react-icons/fa6";
import {motion} from "framer-motion";

export default function RightSection({ guestName, slugGuestName }) {
    const [isOpened, setIsOpened] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    const topRef = useRef(null);
    const audioRef = useRef(null);
    const handleOpenInvitation = () => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: "smooth" });
        }

        setIsFadingOut(true);
        setTimeout(() => {
            setIsOpened(true);
            setIsFadingOut(false);
            if (!audioRef.current) {
                const audio = new Audio("/audio.mp3");
                audio.loop = true;
                audio.currentTime = 8;
                audio.play();
                setIsMusicPlaying(true);
                audioRef.current = audio;

                document.addEventListener("visibilitychange", () => {
                    if (!audioRef.current) return;
                    if (document.hidden) {
                        audioRef.current.pause();
                    } else {
                        audioRef.current.play();
                    }
                });
            }
        }, 500);
    };

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isMusicPlaying) {
                audioRef.current.pause();
                setIsMusicPlaying(false);
            } else {
                audioRef.current.play();
                setIsMusicPlaying(true);
            }
        }
    }

    return (
        <motion.div
            initial={{opacity: 1, y:0}}
            animate={isFadingOut ? { opacity: 0, y: -90 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            ref={topRef}
            className={`flex-[1.2] md:flex-[2.2] lg:flex-[1.5] relative bg-gradient-to-b bg-[#f9f4f0] flex flex-col overflow-y-auto 
                h-screen scrollbar-hide`}
            style={{
                backgroundImage: `url(${!isOpened} ? 'img/cover.jpg' : 'img/bg-right.jpg')`
            }}
        >
            {!isOpened ? (
                <Cover handleOpenInvitation={handleOpenInvitation} guestName={guestName} />
            ) : (
                <Content slugGuestName={slugGuestName} />
            )}

            <button onClick={toggleMusic}
                    className="fixed z-10 bottom-6 right-6 p-4 bg-[#685952] text-white rounded-full shadow-lg">
                {isMusicPlaying ? <FaPause size={24}/> : <FaMusic size={24}/>}
            </button>
        </motion.div>
    )
}