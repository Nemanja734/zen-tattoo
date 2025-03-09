import { useFormContext } from "react-hook-form";
import Text from "./text";
import { motion, AnimatePresence } from "motion/react";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  validation?: Record<string, any>;
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

  return (
    <div>
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      {multiline ? (
        <textarea
          {...register(name, validation)}
          id={name}
          placeholder={placeholder}
          rows={8}
          className="form__field min-h-[150px] block"
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          {...register(name, validation)}
          placeholder={placeholder}
          className="form__field"
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
            <Text level="sm" customs="text-red-500 pt-1 leading-[1]">
              {errorMessage}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const framerError = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};
