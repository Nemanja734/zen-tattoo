import { input } from "@/utils/styles";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import FormValidationError from "@/utils/motion/formValidationError";

type Props = {
  className?: string;
  placeholder: string;
  inputName: string;
  ariaLabel?: string;
};

export default function InputTel({
  className,
  placeholder,
  inputName,
  ariaLabel,
}: Props) {
  const [placeholderState, setPlaceholderState] = useState(placeholder);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[inputName]?.message as string | undefined;

  return (
    <div className={className}>
      <label htmlFor={inputName}>Telefonnummer</label>

      <input
        type="tel"
        className={input}
        placeholder={placeholderState}
        {...register(inputName, {
          required: { value: true, message: `Telefonnummer ist ein Pflichtfeld` },
          pattern: {
            value: /^\+?[0-9\s\-()]{7,}$/,
            message: "Gib eine gültige Telefonnummer ein",
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
