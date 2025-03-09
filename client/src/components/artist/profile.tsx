"use client";

import { useState } from "react";
import Icon from "@/components/elements/icon";
import DdAbsolute from "@/components/ddAbsolute";
import { motion } from "motion/react";

export default function Profile() {
  const [showDd, setShowDd] = useState(false);

  return (
    <div className="relative grid">
      <button
        className="cursor-pointer"
        onClick={() => setShowDd((prev) => !prev)}
      >
        <Icon name="profile" />
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ translateY: showDd ? 0 : 10, opacity: showDd ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-full right-0 shadow-md"
      >
        <DdAbsolute onClickOutside={() => setShowDd(false)} />
      </motion.div>
    </div>
  );
}
