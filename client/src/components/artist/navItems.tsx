import Button from "@/components/elements/button";
import { Routes } from "@/lib/routes";
import Link from "next/link";

export default function NavItems() {
    return(
        <div>
            <Link href={Routes.signin} className="mr-4 md:mr-6">Anmelden</Link>
            <Button href={Routes.signup} level="primary-sm">Registrieren</Button>
        </div>
    )
}