import { AnimatePresence, motion } from "motion/react";
import { useRef } from "react";
import { useOnClickOutside } from "@/shared/lib/useOnClickOutside";
import { useOverflowHidden } from "@/shared/lib/useOverflowHidden";
import Overlay from "./overlay";

type Props = {
  showModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export default function Modal({ showModal, closeModal, children }: Props) {
  const ref = useRef(null);

  useOnClickOutside(ref, closeModal);
  useOverflowHidden(showModal);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {showModal && (
        <>
          <Overlay />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            ref={ref}
            className="z-[1000] fixed inset-0 m-auto bg-background w-[95%] p-6 lg:w-[800px] h-fit md:p-12 rounded-lg"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
