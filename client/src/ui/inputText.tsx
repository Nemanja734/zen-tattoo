"use client"

import { useState } from "react";

type Props = {
    defaultPlaceholder: string,
    onChange: (value: string) => void,
    ariaLabel: string,
}

export default function InputText({ defaultPlaceholder, onChange, ariaLabel }: Props) {
    const [placeholder, setPlaceholder] = useState(defaultPlaceholder);

  return (
    <input
      type="text"
      className="outline-none w-full border-2 border-tint rounded-sm px-0.75 md:px-2 py-0.75 md:py-2 transition-[border-color] duration-200 focus:border-primary bg-background"
      placeholder={defaultPlaceholder}
      onFocus={() => setPlaceholder("")}
      onBlur={() => setPlaceholder(defaultPlaceholder)}
      onChange={(e) => onChange(e.target.value)}
      aria-label={ariaLabel}
    />
  );
}

// {
//   clsx(input, "pl-7 sm:pl-10 md:pl-12 text-sm");
// }
