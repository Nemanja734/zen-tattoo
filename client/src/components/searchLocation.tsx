"use client";

import Icon from "@/ui/icon";
import { inputStyle } from "@/config/styles";
import clsx from "clsx";
import { useState } from "react";

export default function SearchLocation() {
  const defaultPlaceholder = "Suche nach Standort";
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 lg:translate-0 lg:static lg:mr-auto">
      <div className="relative">
        <Icon
          name="search"
          size={24}
          className="absolute left-1.5 sm:left-2.5 md:left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        />
        <input
          type="text"
          placeholder={placeholder}
          className={clsx(inputStyle, "pl-6! sm:pl-10! md:pl-12! text-sm md:text-base")}
          onFocus={() => setPlaceholder("")}
          onBlur={() => setPlaceholder(defaultPlaceholder)}
          aria-label="Standort suchen"
        />
      </div>
    </div>
  );
}
