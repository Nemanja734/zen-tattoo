import { motion } from "motion/react";

export default function Overlay() {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[900] h-full w-full"
      >
        <div className="bg-black opacity-50 h-full w-full"></div>
      </motion.div>
  );
}
