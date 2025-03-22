import { input } from "@/utils/styles";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import FormValidationError from "@/utils/motion/formValidationError";

type Props = {
  className?: string;
  inputName: string;
  ariaLabel?: string;
};

export default function InputPassword({
  className,
  inputName,
  ariaLabel,
}: Props) {
    const placeholder = "Mindestens 8 Zeichen";
    const label = "Passwort"

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
        type="tel"
        className={input}
        placeholder={placeholderState}
        {...register(inputName, {
          required: { value: true, message: `${label} ist ein Pflichtfeld` },
          minLength: {
            value: 8,
            message: "Wähle ein Passwort mit mindestens 8 Zeichen.",
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
