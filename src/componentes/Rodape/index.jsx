import Image from "next/image";
import logo from "/public/logo.png";
import estilos from "./Rodape.module.css";

export default function Rodape() {
    return (
        <footer className={estilos.rodape}>
            <div className={estilos.container_contatos}>
                <Image src={logo} alt="Logo da Gelateria" className={estilos.logo} />

                <div>
                    <h3>ENDEREÇO</h3>

                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>

                <div>
                    <h3>CONTATO</h3>

                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>

                <div>
                    <h3>HORÁRIOS</h3>

                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>

            <div className={estilos.container_autoral}>
                <p>Gelateria. Desenvolvido por Vinicius Lucio Lopes</p>
            </div>

        </footer>
    );
}