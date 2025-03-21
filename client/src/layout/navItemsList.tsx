import { navItems } from "@/utils/navItems";
import clsx from "clsx";
import NavItems from "./navItems";
import Button from "@/shared/ui/button";
import { useState } from "react";
import EmailRegistrationModal from "@/components/artist/emailRegistrationModal";

interface Props {
  className: string;
}

export default function NavItemsList({ className }: Props) {
  return (
    <div className={clsx("gap-header", className)}>
      {navItems.map((item, index) => (
        <div key={index} className={clsx(item.mobile && "lg:hidden")}>
          <NavItems text={item.text} link={item.link} />
        </div>
      ))}
      <EmailRegistrationModal buttonLevel="primary-sm">Registrieren</EmailRegistrationModal>
    </div>
  );
}
