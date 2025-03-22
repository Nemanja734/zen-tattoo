import { navItems } from "@/utils/data";
import clsx from "clsx";
import NavItems from "./navItems";
import ButtonEmailRegistration from "@/shared/ui/buttonEmailRegistration";

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

      <ButtonEmailRegistration buttonLevel="primary-sm" >Registrieren</ButtonEmailRegistration>
    </div>
  );
}
