import Link from "next/link";

interface Props {
  href: string;
  styles?: string;
  children: React.ReactNode;
}

export default function DropdownItem(props: Props) {
  return (
    <Link className={`dd-item ${props.styles || ""}`} href={props.href}>
      {props.children}
    </Link>
  );
}
