import Button from "@/ui/button";
import Link from "next/link";
import { navItems } from "@/config/navItems";
import clsx from "clsx";

interface Props {
  className: string
}

export default function NavItems({className}: Props) {
  // className sets the breakpoint for when the navlinks should be visible
  return (
    <div className={clsx("gap-header", className)}>
      {navItems.map((item, index) => (
        <div key={index}>
          {item.type == "link" ? (
            <Link href={item.link}>{item.text}</Link>
          ) : (
            <Button href={item.link} level="primary-sm" className="w-full text-center">
              {item.text}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}
