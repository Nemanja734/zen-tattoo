import { motion } from "motion/react";

export default function Modal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-black opacity-50 min-h-[100dvh]">
      </div>
    </motion.div>
  );
}
