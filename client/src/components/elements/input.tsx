import { useFormContext } from "react-hook-form";
import Text from "./text";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  validation?: Record<string, unknown>;
  multiline?: boolean;
}

export default function Input({
  name,
  label,
  type = "text",
  placeholder,
  validation,
  multiline = false,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // Extracting error message safely
  const errorMessage = errors[name]?.message as string | undefined;

  const inputStyle =
    "outline-none w-full border-2 border-shade rounded-sm px-2 py-2.5 transition-[border-color] duration-400 focus:border-primary bg-background";

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {multiline ? (
        <textarea
          {...register(name, validation)}
          id={name}
          placeholder={placeholder}
          className={clsx(inputStyle, "min-h-[150px] md:min-h-[15rem] block")}
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          {...register(name, validation)}
          placeholder={placeholder}
          className={inputStyle}
        />
      )}
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
    </div>
  );
}
