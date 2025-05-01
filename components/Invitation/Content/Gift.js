"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import {FaCreditCard, FaRegCopy} from "react-icons/fa";
import {nunito_sans, playball, sora} from "@/app/font";
import Image from "next/image";



export default function Gift() {
    const [showGift, setShowGift] = useState(false);
    const [copied, setCopied] = useState(false);
    const [message, setMessage] = useState("");

    const toggleGiftCard = () => {
        setShowGift(!showGift);
    };

    const fallbackCopyTextToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";  // Hindari scroll ke bawah di iOS
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand("copy");
            return successful;
        } catch (err) {
            console.error("Fallback copy failed:", err);
            return false;
        } finally {
            document.body.removeChild(textArea);
        }
    };

    const copyToClipboard = () => {
        const text = "6475284228";
        if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
            navigator.clipboard.writeText(text)
                .then(() => {
                    setCopied(true);
                    setMessage("Teks berhasil disalin!");
                })
                .catch((err) => {
                    console.warn("Clipboard error, fallback:", err);
                    const fallbackSuccess = fallbackCopyTextToClipboard(text);
                    setMessage(fallbackSuccess ? "Teks berhasil disalin!" : "Gagal menyalin teks.");
                });
        } else {
            const fallbackSuccess = fallbackCopyTextToClipboard(text);
            setMessage(fallbackSuccess ? "Teks berhasil disalin!" : "Gagal menyalin teks.");
        }

        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col items-center bg-white pt-0 pb-0 px-0">
            <section className={`${nunito_sans.className} bg-[#69564B] text-sm text-white text-center w-full py-20 px-10`}>
                <h2 className={`${playball.className} text-4xl mb-6`}>Wedding Gift</h2>
                <p className="mb-2">Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.</p>
                <p className="mb-6">Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui dibawah ini.</p>

                <button 
                    onClick={toggleGiftCard}
                    className="flex items-center gap-2 bg-white text-[#69564B] px-6 py-1 rounded-full font-medium mx-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <FaCreditCard className="text-sm"/>
                    Klik di Sini
                </button>

                {/* Gift Card - Show after button clicked */}
                {showGift && (
                    <motion.div
                        key="giftcard"
                        initial={{ opacity: 0, y: 20}}
                        animate={{ opacity: 1, y: 0}}
                        exit={{ opacity: 0, y: 20}}
                        transition={{ duration: 0.4}}
                        className="mt-10 bg-white text-[#69564B] max-w-md mx-auto p-6 rounded-2xl shadow-lg relative"
                    >
                        {/* Card Top (BCA and Chip) */}
                        <div className="flex justify-between items-start mb-5">
                            <Image src="/img/bca.svg" alt="BCA" className="h-10" /> {/* <-- Pastikan path logo benar */}
                        </div>

                        {/* Card Details */}
                        <div className={`${nunito_sans.className} mt-6 text-left`}>
                            <p className="font-semibold">No Rekening</p>
                            <p className={`${sora} text-2xl font-bold`}>6475284228</p>

                            <p className="mt-6 font-semibold">Atas Nama</p>
                            <p className="italic">Jonathan Tambunan, S.H</p>
                        </div>

                        {/* Copy Button */}
                        <button
                            onClick={copyToClipboard}
                            className="absolute bottom-4 right-4 flex items-center gap-1 text-xs bg-[#69564B] text-white
                                px-3 py-1 rounded-full hover:bg-[#58483F] transition delay-150 duration-300 ease-in-out
                                hover:-translate-y-1 hover:scale-110"
                        >
                            <FaRegCopy /> Salin
                        </button>
                    </motion.div>
                )}

            </section>
        </div>
    )
}