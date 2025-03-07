import Link from "next/link";
import { useClickOutside } from "@/helpers/useClickOutside";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import DropdownItem from "./dropdownItem";

export default function Dropdown({ onClickOutside, show }: any) {
  const ref = useRef(null);
  useClickOutside(ref, onClickOutside);

  return (
    <CSSTransition in={show} timeout={300} classNames="transition" nodeRef={ref} unmountOnExit>
      <div ref={ref} className="dd">
          <DropdownItem href="sign-in">Anmelden</DropdownItem>
          <DropdownItem href="sign-in">Registrieren</DropdownItem>
      </div>
    </CSSTransition>
  );
}
