import { input } from "@/utils/styles";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import FormValidationError from "@/utils/motion/formValidationError";

type Props = {
  className?: string;
};

export default function InputEmail({
  className,
}: Props) {
    const label = "E-Mail";
    const placeholder = "E-Mail-Addresse"
    const inputName = "email";
    const ariaLabel = "Deine E-Mail-Addressse"
  const [placeholderState, setPlaceholderState] = useState(placeholder);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[inputName]?.message as string | undefined;

  return (
    <div className={className}>
      <label htmlFor={inputName}>{label}</label>

      <input
        type="email"
        className={input}
        placeholder={placeholderState}
        {...register(inputName, {
          required: { value: true, message: `${label} ist ein Pflichtfeld` },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Gib eine gültige E-Mail-Addresse ein",
          },
        })}
        onFocus={() => setPlaceholderState("")}
        onBlur={() => setPlaceholderState(placeholder)}
        aria-label={ariaLabel}
      />

      <FormValidationError errorMessage={errorMessage} />
    </div>
  );
}
