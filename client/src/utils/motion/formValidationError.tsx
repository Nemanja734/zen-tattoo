import { AnimatePresence, motion } from "motion/react";
import Text from "@/shared/ui/text";

type Props = {
    errorMessage: string | undefined,
}

export default function FormValidationError({errorMessage}: Props) {
    return (
        <AnimatePresence mode="wait" initial={false}>
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "fit-content", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="alert"
          >
            <Text level="sm" customs="text-alarm pt-1 leading-[1]">
              {errorMessage}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    )
}