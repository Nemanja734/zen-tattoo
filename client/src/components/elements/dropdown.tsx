import { useClickOutside } from "@/helpers/useClickOutside";
import { useRef } from "react";
import DropdownItem from "./dropdownItem";

interface Props {
  onClickOutside: () => void;
}

export default function Dropdown({ onClickOutside }: Props) {
  const ref = useRef(null);
  useClickOutside(ref, onClickOutside);

  return (
    <div ref={ref} className="dd">
      <DropdownItem href="sign-in">Anmelden</DropdownItem>
      <DropdownItem href="sign-up">Registrieren</DropdownItem>
    </div>
  );
}
