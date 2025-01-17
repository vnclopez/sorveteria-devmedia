import Image from "next/image";
import oreo from "/public/sabor-oreo.png";
import pistache from "/public/sabor-pistache.png";
import cookies from "/public/sabor-cookies-avela.png";
import kiwi from "/public/sorbet-kiwi.png";
import morango from "/public/sorbet-morango.png";
import limao from "/public/sorbet-limao.png";

export default function Sabores() {
    return (
        <main>
            <section>
                <h1>NOSSOS SABORES</h1>
            </section>

            <section>
                <h2>SABORES DE SORVETE</h2>

                <div>
                    <div>
                        <Image src={oreo} alt="Imagem de sorvete com sabor oreo" />
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>

                    <div>
                        <Image src={pistache} alt="Imagem de sorvete com sabor pistache" />
                        <h3>Sorvete Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>

                    <div>
                        <Image src={cookies} alt="Imagem de sorvete com sabor cookies & avelã" />
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>

                    <div>
                        <Image src={kiwi} alt="Imagem de sorvete com sabor kiwi" />
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    <div>
                        <Image src={morango} alt="Imagem de sorvete com sabor morango" />
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>

                    <div>
                        <Image src={limao} alt="Imagem de sorvete com sabor de limão siciliano" />
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>

            </section>
        </main>
    );
}