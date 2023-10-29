import style from "./index.module.css";

import Imagem from "./image.jpg";

export function Inicio () {

    return (
        <div className={style.container}>
            <img src={Imagem} alt="Imagem" />
        </div>
    );
}