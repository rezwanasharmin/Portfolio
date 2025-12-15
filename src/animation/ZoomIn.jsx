import { motion } from "framer-motion";

const ZoomIn = ({ children, delay = 0, scaleFrom = 0.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleFrom }}
      whileInView={{ opacity: 1, scale: 1 }}
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
};

export default ZoomIn;
