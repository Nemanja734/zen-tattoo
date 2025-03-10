"use client";

import Text from "../ui/text";
import Icon from "../ui/icon";
import { motion } from "motion/react";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

type Link = {
  text: string;
  href: string;
};

type Props = {
  gap: string,
  ddButtonWidth: string,
  ddButtonText: string;
  ddItems: Link[];
};

export default function DdStatic({
  ddButtonWidth,
  gap,
  ddButtonText,
  ddItems,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ul className={clsx("overflow-hidden grid", gap)}>
      <li
        aria-label="Navigation Section"
        className={clsx("flex justify-between cursor-pointer", ddButtonWidth)}
        onClick={toggleDropdown}
      >
        <Text level="base" customs="font-bold">
          {ddButtonText}
        </Text>
        <motion.div
          animate={{ rotate: isOpen ? "180deg" : 0 }}
          transition={{ duration: 0.3 }}
          className="w-fit"
        >
          <Icon name="chevDown" color="background" size={18}></Icon>
        </motion.div>
      </li>

      <motion.li
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={clsx("overflow-hidden grid", gap)}
      >
        {ddItems.map((item, index) => (
          <Link key={index} href={item.href} className="w-fit">
            {item.text}
          </Link>
        ))}
      </motion.li>
    </ul>
  );
}
