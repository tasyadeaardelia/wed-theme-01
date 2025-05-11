"use client"

import FlowerFrame from "@/components/FlowerFrame/FlowerFrame";
import { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {nunito_sans, playball} from "@/app/font";

export default function Rsvp({ slugGuestName }) {
    const [message, setMessage] = useState('');
    const [name, setName] = useState("");
    const [fromName, setFromName] = useState(slugGuestName || '');
    const [attendance_confirmation, setAttendanceConfirmation] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [listMessage, setListMesssage] = useState([]); // <-- Ini buat simpan semua ucapan!


    useEffect(() => {
        fetchMessages(); // Fetch saat komponen mount

        const intervalId = setInterval(fetchMessages, 5 * 60 * 1000); // setiap 5 menit

        return () => clearInterval(intervalId); // bersihkan saat unmount
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await fetch("https://jova-admin.mantappdev.com/api/message-rsvp", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Gagal mengambil data ucapan");
            }

            const data = await response.json();
            console.log("Response dari API:", data);  // Pastikan data yang diterima sesuai
            if (data && Array.isArray(data.data)) {
                setListMesssage(data.data);
            } else {
                console.error("Data yang diterima bukan array:", data);
            }
        } catch (error) {
            console.error("Error saat mengambil data pesan:", error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            message,
            attendance_confirmation: attendance_confirmation === "hadir",
            fromName
        };

        try {
            await fetch("https://jova-admin.mantappdev.com/sanctum/csrf-cookie", {
                credentials: "include",
            });

            
            const response = await fetch("https://jova-admin.mantappdev.com/api/message-rsvp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // penting!
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Gagal mengirim ucapan");
            }

            const newMessage = {
                ...payload,
                waktu: new Date().toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }),
            };

            setListMesssage([newMessage, ...listMessage]);
            setSubmitted(true);

            setName("");
            setMessage("");
            setAttendanceConfirmation(null);
            setFromName(slugGuestName);

            setTimeout(() => {
                setSubmitted(false);
            }, 10000);

            fetchMessages();
        } catch (error) {
            console.error("Terjadi kesalahan saat submit:", error);
            alert("Gagal mengirim ucapan. Silakan coba lagi.");
        }
    };

    const isButtonDisabled = !slugGuestName || !name || !message || attendance_confirmation === null;


    return (
        <section className="relative flex justify-center items-start  flex-col bg-[#f9f4f0] py-20 px-4 pb-8 bg-cover overflow-y-clip"
            style={{
                backgroundImage: "url('img/bg-right.jpg')"
            }}
        >
            <FlowerFrame flowerSize={120} />

            <div className="relative z-10 max-w-xl mx-auto bg-[#FFFFFF95] border-solid border border-[#ffffffcc] transition-[background,border,border-radius,box-shadow] duration-300 mt-0 mb-0 p-0 rounded-3xl shadow-lg py-10 px-8 text-center">
                <h2 className={`${playball.className} text-3xl text-center text-[#685952] mb-2`}>Ucapan & RSVP</h2>
                <p className={`${nunito_sans.className} text-center text-sm text-[#333] mb-6`}>
                    {submitted ? "Terima kasih sudah mengirimkan ucapan! " : "Berikan doa dan ucapan terbaik untuk kami."}
                </p>
                {!submitted && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nama"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border border-[#d5deea] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#69564B]/50 text-[#69564B]"
                            required
                        />
                        <input
                            type="text"
                            placeholder="FromName"
                            hidden={true}
                            value={fromName}
                            onChange={(e) => setFromName(e.target.value)}
                            className="w-full p-3 border border-[#d5deea] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#69564B]/50 text-[#69564B]"
                            required
                        />

                        <textarea
                            placeholder="Ucapan"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-3 border border-[#d5deea] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#69564B]/50 text-[#69564B]"
                            rows={4}
                            required
                        />

                        <div className={`${nunito_sans.className} flex items-center justify-center gap-6 my-4 text-sm`}>
                            <button type="button"
                                    className={`flex items-center gap-2 px-5 py-1 rounded-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${
                                        attendance_confirmation === "hadir" ? "bg-[#69564B] text-white" : "bg-gray-200 text-gray-700"}`}
                                    onClick={() => setAttendanceConfirmation("hadir")}
                            >
                                <FaCheckCircle/> Hadir
                            </button>
                            <button type="button"
                                    className={`flex items-center gap-2 px-5 py-1 rounded-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${
                                        attendance_confirmation === "tidak_hadir" ? "bg-[#69564B] text-white" : "bg-gray-200 text-gray-700"}`}
                                    onClick={() => setAttendanceConfirmation("tidak_hadir")}
                            >
                                <FaTimesCircle/> Tidak Hadir
                            </button>
                        </div>

                        <button type="submit"
                                className={`w-full px-5 py-1 rounded-full transition delay-150 duration-300 ease-in-out 
        ${isButtonDisabled ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-[#69564B] text-white hover:bg-[#57463b] hover:-translate-y-1 hover:scale-110'}`}
                                disabled={isButtonDisabled} // Disable button jika kondisi terpenuhi
                        >
                            Kirim
                        </button>
                    </form>
                )}
            </div>

            {/* List Ucapan */}
            {listMessage.length > 0 ? (
                <div className="max-w-md mx-auto w-full mt-10 z-5">
                    <div className="space-y-4 max-h-[200px] overflow-y-auto p-2 scrollbar-hide">
                        {listMessage.map((item, index) => (
                            <div key={index} className="bg-white/80 p-4 rounded-xl shadow border border-gray-200">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-semibold text-[#69564B]">{item.name}</h4>
                                    <span className="text-xs text-gray-500">
                            {/* Format waktu */}
                                        {new Date(item.created_at).toLocaleString("id-ID", {
                                            dateStyle: "medium",
                                            timeStyle: "short"
                                        })}
                        </span>
                                </div>
                                <p className="text-[#69564B] mb-2">{item.message}</p>
                                <span className="text-sm font-medium">
                        {item.attendance_confirmation === true ? "✅ Akan Hadir" : "❌ Tidak Hadir"}
                    </span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="max-w-md mx-auto w-full mt-10 z-5">
                </div>
            )}

        </section>
    )
}