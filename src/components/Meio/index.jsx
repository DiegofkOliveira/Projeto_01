import style from "./index.module.css";

export function Meio () {

    return (
        <div className={style.container}>
            <h1>Ambientes <strong className={style.textoLaranjaPrimeiro}>únicos</strong> para você!</h1>
            <h2>Nós Criamos ambientes <strong className={style.textoCinza}>exclusívos e únicos,</strong> com muito bom gosto e profissionalismo,
            investimos tempo e <strong className={style.textoLaranja}>dedicação no seu projeto.</strong></h2>
            <h3>Tenha <strong className={style.textoLaranja}>ambientes limpos</strong> e bem decorados, transmitindo <strong className={style.textoCinza} >elegância</strong> e <strong className={style.textoCinza}>finesse</strong> para todo aquele que estiver ali.</h3>
        </div>
    );
}