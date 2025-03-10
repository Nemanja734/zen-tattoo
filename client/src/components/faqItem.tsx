"use client";

import { useState } from "react";
import Icon from "./elements/icon";
import Text from "./elements/text";
import { motion } from "motion/react";

interface Props {
  question: string;
  answer: string;
  additionTitle?: string;
  additionText?: string;
}

export default function FAQItem({
  question,
  answer,
  additionTitle,
  additionText,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[660px] w-full m-auto bg-primary-tint rounded-xl border-1 border-tint">
      <div
        className="flex justify-between items-center gap-6 p-4 md:p-8 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Text level="base" customs="font-bold">
          {question}
        </Text>
        <motion.div
          animate={{ rotate: isOpen ? "180deg" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon name="chevDown" size={20}></Icon>
        </motion.div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-4 md:px-8 pb-4 md:pb-8">
          <Text level="base">{answer}</Text>
          {additionTitle && (
            <div>
              <Text level="base" customs="font-bold text-sm mt-4 md:mt-8">
                {additionTitle}
              </Text>
              <Text level="base" customs="font-regular text-sm">
                {additionText}
              </Text>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
