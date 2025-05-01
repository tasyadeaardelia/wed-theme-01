import Image from 'next/image'
import { motion } from "framer-motion";
import { windAnimation } from "@/animations/windAnimation";

const FlowerBottomLeft = ({flowerSize = 160}) => (
    <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 rotate-270"
        variants={windAnimation}
        initial="initial"
        animate="animate"
    >
        <Image src="/img/leafes.png" alt="Decor Bottom Left" width={`${flowerSize}`} height={`${flowerSize}`} />
    </motion.div>
);

export default FlowerBottomLeft;