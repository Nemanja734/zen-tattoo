import { input } from "@/utils/styles";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import FormValidationError from "@/utils/motion/formValidationError";

type Props = {
  className?: string;
  label: string;
  placeholder: string;
  inputName: string;
  ariaLabel: string;
};

export default function InputText({
  className,
  label,
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
      <label htmlFor={inputName}>{label}</label>

      <input
        type="text"
        className={input}
        placeholder={placeholderState}
        {...register(inputName, {
          required: { value: true, message: `${label} ist ein Pflichtfeld` },
        })}
        onFocus={() => setPlaceholderState("")}
        onBlur={() => setPlaceholderState(placeholder)}
        aria-label={ariaLabel}
      />

      <FormValidationError errorMessage={errorMessage} />
    </div>
  );
}
