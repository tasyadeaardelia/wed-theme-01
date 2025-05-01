import FlowerFrame from "@/components/FlowerFrame/FlowerFrame";
import Image from "next/image";

export default function ThankYou() {
    return (
        <section className="relative flex justify-center items-start  flex-col bg-[#f9f4f0] py-20 px-4 pb-8 bg-cover"
            style={{
                backgroundImage: "url('img/bg-right.jpg')"
            }}
        >
            <FlowerFrame />

            <div className="relative z-10 max-w-xl mx-auto bg-[#FFFFFF95] border-solid border border-[#ffffffcc] transition-[background,border,border-radius,box-shadow] duration-300 mt-0 mb-0 p-0 rounded-3xl shadow-lg py-10 px-8 text-center">
                <div className="mt-8 flex justify-center">
                    <Image
                        src="/img/04.jpeg"
                        alt="Couple"
                        width={100} height={100}
                        className="w-60 h-70 object-cover rounded-full border-4 border-white shadow-md"
                    />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Terima kasih</h2>
                <p className="text-gray-700">
                    Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, 
                    berkenan hadir dan memberikan do’a restu kepada kami.
                </p>

            
                {/* Deskripsi Anak */}
                <p className="mt-5 text-gray-600 text-sm">
                    Kami Yang Berbahagia
                </p>

                <h4 className="mt-4 font-semibold text-2xl">Eva & Jonathan</h4>
            </div>
        </section>
    )
}