import { motion } from "framer-motion";

const FadeUp = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
            duration: 1,
            ease: "easeOut",
            delay,
        }}
    >
        {children}
    </motion.div>
);

export default FadeUp;
