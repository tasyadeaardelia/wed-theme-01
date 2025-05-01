import { nunito_sans } from "@/app/font";

export default function Ayat() {
    return (
        <div className="flex flex-col items-center bg-white pt-0 pb-0 px-0">
            <section className="bg-[#69564B] text-white text-center w-full py-10 px-6">
                <p className={`${nunito_sans.className} max-w-xl mx-auto text-[14px]`}>
                    "Akhirnya, saudara-saudaraku, bersukacitalah, usahakanlah dirimu supaya sempurna. Terimalah segala nasihatku! 
                    Sehati sepikirlah kamu, dan hiduplah dalam damai sejahtera; maka Allah, sumber kasih dan damai sejahtera akan menyertai kamu!"
                </p>
                <h3 className={`${nunito_sans.className} text-[16px] mt-6 font-bold`}>2 Korintus 13:11B</h3>
            </section>
        </div>
    )
}