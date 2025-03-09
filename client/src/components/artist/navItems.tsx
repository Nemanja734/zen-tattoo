import Button from "@/components/elements/button";
import Link from "next/link";

export default function NavItems() {
    return(
        <div>
            <Link href="/sign-in" className="mr-4 md:mr-6">Anmelden</Link>
            <Link href="/sign-up"><Button level="primary-sm">Registrieren</Button></Link>
        </div>
    )
}