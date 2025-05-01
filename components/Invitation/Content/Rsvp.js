"use client"

import FlowerFrame from "@/components/FlowerFrame/FlowerFrame";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {nunito_sans, playball} from "@/app/font";

export default function Rsvp() {
    const [message, setMessage] = useState('');
    const [nama, setNama] = useState("");
    const [ucapan, setUcapan] = useState("");
    const [kehadiran, setKehadiran] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [listUcapan, setListUcapan] = useState([]); // <-- Ini buat simpan semua ucapan!
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newUcapan = {
          nama,
          ucapan,
          kehadiran,
          waktu: new Date().toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }),
        };
    
        setListUcapan([newUcapan, ...listUcapan]); // tambahkan di awal list
        setSubmitted(true);
    
        // Reset form setelah submit
        setNama("");
        setUcapan("");
        setKehadiran(null);
    
        // Supaya setelah submit beberapa saat form bisa muncul lagi kalau mau
        setTimeout(() => {
          setSubmitted(false);
        }, 10000); // 3 detik baru form bisa muncul lagi
    };

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
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            className="w-full p-3 border border-[#d5deea] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#69564B]/50 text-[#69564B]"
                            required
                        />
                        <textarea
                            placeholder="Ucapan"
                            value={ucapan}
                            onChange={(e) => setUcapan(e.target.value)}
                            className="w-full p-3 border border-[#d5deea] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#69564B]/50 text-[#69564B]"
                            rows={4}
                            required
                        />

                        <div className={`${nunito_sans.className} flex items-center justify-center gap-6 my-4 text-sm`}>
                            <button type="button" className={`flex items-center gap-2 px-5 py-1 rounded-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${
                                kehadiran === "hadir" ? "bg-[#69564B] text-white" : "bg-gray-200 text-gray-700"}`}
                                onClick={() => setKehadiran("hadir")}
                            >
                                <FaCheckCircle /> Hadir
                            </button>
                            <button type="button" className={`flex items-center gap-2 px-5 py-1 rounded-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${
                                kehadiran === "tidak_hadir" ? "bg-[#69564B] text-white" : "bg-gray-200 text-gray-700"}`}
                                onClick={() => setKehadiran("tidak_hadir")}
                            >
                                <FaTimesCircle /> Tidak Hadir
                            </button>
                        </div>

                        <button type="submit" className="w-full bg-[#69564B] text-white px-5 py-1 rounded-full hover:bg-[#57463b] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                            Kirim
                        </button>
                    </form>
                )}                
            </div>

            {/* List Ucapan */}
            {listUcapan.length > 0 && (
                <div className="max-w-md mx-auto w-full mt-10 z-5">
                    <div className="space-y-4 max-h-[200px] overflow-y-auto p-2">
                    {listUcapan.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/80 p-4 rounded-xl shadow border border-gray-200"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-semibold text-[#69564B]">{item.nama}</h4>
                                <span className="text-xs text-gray-500">{item.waktu}</span>
                            </div>
                            <p className="text-[#69564B] mb-2">{item.ucapan}</p>
                            <span className="text-sm font-medium">
                                {item.kehadiran === "hadir" ? "✅ Akan Hadir" : "❌ Tidak Hadir"}
                            </span>
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </section>
    )
}