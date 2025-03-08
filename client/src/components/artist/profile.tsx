"use client";

import { useState } from "react";
import Icon from "@/components/ui/icon";
import Dropdown from "@/components/ui/dropdown";

export default function Profile() {
  const [showDd, setShowDd] = useState(false);

  return (
    <div className="relative grid">
      <button className="cursor-pointer" onClick={() => setShowDd((prev) => !prev)}>
        <Icon name="profile" />
      </button>
      <Dropdown show={showDd} onClickOutside={() => setShowDd(false)} />
    </div>
  );
}
