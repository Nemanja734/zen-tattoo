"use client";

import Text from "./elements/text";
import Icon from "./elements/icon";
import { motion } from "motion/react";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

type Link = {
  text: string;
  href: string;
};

type Props = {
  ddButton: string;
  ddItems: Link[];
  className?: string;
  linkClassName?: string;
};

export default function DdStatic({
  ddButton,
  ddItems,
  className,
  linkClassName,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ul className={className}>
      <li
        aria-label="Navigation Section"
        className="flex items-center gap-3 cursor-pointer w-fit"
        onClick={toggleDropdown}
      >
        <Text level="base" customs="font-bold">
          {ddButton}
        </Text>
        <motion.div
          animate={{ rotate: isOpen ? "180deg" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon name="chevDown" color="background" size={18}></Icon>
        </motion.div>
      </li>

      <motion.li
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={clsx("overflow-hidden", className)}
      >
        {ddItems.map((item, index) => (
          <Link key={index} href={item.href} className={linkClassName}>
            {item.text}
          </Link>
        ))}
      </motion.li>
    </ul>
  );
}
