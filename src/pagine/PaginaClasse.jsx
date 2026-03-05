import Contenuto from "../componenti/base/Contenuto";
import Piedi from "../componenti/base/Piedi";
import Testa from "../componenti/base/Testa";

export default function PaginaClasse({anno, sezione}) {
    return (
        <div className="PaginaClasse">
            <Testa></Testa>
                <Contenuto larghezza="100%" altezza="60vh">
                    <p> La pagina della {anno}{sezione}!</p>
                </Contenuto>
            <Piedi></Piedi>
        </div>
    )
}