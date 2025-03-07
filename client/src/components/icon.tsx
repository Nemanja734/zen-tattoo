"use client";

import React from "react";
import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  size?: string;
  color?: string;
}

export default function Icon({ icon, size = "2.5rem", color = "#000" }: Props) {
  return React.cloneElement(icon as ReactElement<any>, {
    style: { fontSize: size, color },
  });
}
