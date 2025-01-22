import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import estilos from "./Topo.module.css";

export default function Topo() {
    return (
        <header className={estilos.topo}>

            <div className={estilos.conteudo_topo}>
                <Image src={logo} alt="Logo da Gelateria" className={estilos.logo} />

                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/sabores">Sabores</Link>
                    <Link href="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    );
}