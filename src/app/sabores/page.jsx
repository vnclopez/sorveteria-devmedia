import Image from "next/image";
import oreo from "/public/sabor-oreo.png";
import pistache from "/public/sabor-pistache.png";
import cookies from "/public/sabor-cookies-avela.png";
import kiwi from "/public/sorbet-kiwi.png";
import morango from "/public/sorbet-morango.png";
import limao from "/public/sorbet-limao.png";
import estilos from "./sabores.module.css";

export default function Sabores() {
    return (
        <main>
            <section className={estilos.secao_banner}>
                <h1>NOSSOS SABORES</h1>
            </section>

            <section className={estilos.secao_sorvetes}>
                <h2>SABORES DE SORVETE</h2>

                <div className={estilos.container_cards}>
                    <div className={estilos.card}>

                        <div className={estilos.container_imagem}>
                            <Image src={oreo} alt="Imagem de sorvete com sabor oreo" className={estilos.imagem} />
                        </div>

                        <div className={estilos.card_texto}>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>

                    </div>

                    <div className={estilos.card}>

                        <div className={estilos.container_imagem}>
                            <Image src={pistache} alt="Imagem de sorvete com sabor pistache" className={estilos.imagem} />
                        </div>

                        <div className={estilos.card_texto}>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>

                    </div>

                    <div className={estilos.card}>

                        <div className={estilos.container_imagem}>
                            <Image src={cookies} alt="Imagem de sorvete com sabor cookies & avelã" className={estilos.imagem} />
                        </div>

                        <div className={estilos.card_texto}>
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>

                    </div>

                    <div className={estilos.card}>

                        <div className={estilos.container_imagem}>
                            <Image src={kiwi} alt="Imagem de sorvete com sabor kiwi" className={estilos.imagem} />
                        </div>

                        <div className={estilos.card_texto}>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>

                    </div>

                    <div className={estilos.card}>

                        <div className={estilos.container_imagem}>
                            <Image src={morango} alt="Imagem de sorvete com sabor morango" className={estilos.imagem} />
                        </div>

                        <div className={estilos.card_texto}>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>

                    </div>

                    <div className={estilos.card}>

                        <div className={estilos.container_imagem}>
                            <Image src={limao} alt="Imagem de sorvete com sabor de limão siciliano" className={estilos.imagem} />
                        </div>

                        <div className={estilos.card_texto}>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    );
}