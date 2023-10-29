import style from "./index.module.css";

import imagem from "./Imagem.png";

export function Fim() {

    return (
        <><div className={style.container}>
            <a href="https://instagram.com/moveisparavoce">Instagram</a>
            <a href="mailto:contato@moveisparavoce.com">Fale Conosco</a>
        </div><div>
                <img className={style.final} src={imagem} alt="Final" />
            </div></>
    )
}