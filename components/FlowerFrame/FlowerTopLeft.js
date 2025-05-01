import Image from 'next/image'
import { motion } from "framer-motion";
import { windAnimation } from "@/animations/windAnimation";

export default function FlowerTopLeft({flowerSize = 160}) {
    return (
        <motion.div
            className="absolute top-0 left-0 w-40 h-40"
            variants={windAnimation}
            initial="initial"
            animate="animate"
        >
            <Image src="/img/leafes.png" alt="Decor Top Left" width={`${flowerSize}`} height={`${flowerSize}`} />
        </motion.div>
    );
}