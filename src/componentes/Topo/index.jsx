import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";

export default function Topo() {
    return (
        <header>
            <Image src={logo} alt="Logo da Gelateria" />

            <nav>
                <Link href="/">Home</Link>
                <Link href="/sabores">Sabores</Link>
                <Link href="/sobre">Sobre</Link>
            </nav>
        </header>
    );
}