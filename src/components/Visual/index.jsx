import style from "./index.module.css";

import { Inicio } from "../Inicio";
import { Meio } from "../Meio";
import { Fim } from "../Fim";

export function Visual () {
    return (
        <div className={style.container}>
            <Inicio/>
            <Meio/>
            <Fim/>
        </div>
    );
}