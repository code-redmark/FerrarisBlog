import { Link } from "react-router-dom"
import "../../stile/ClassiHome.css"

export default function ListaClassi({ classi }) {
    return (
        
        <div className="ListaClassi">
            {
                classi.map(classe => (
                    <div key={classe._id} className="RiquadroClasse">
                        <Link id="LinkRiquadro" to={`/classe/${classe.anno}${classe.sezione}`}>
                            <h1>{classe.anno} {classe.sezione}</h1>
                        </Link>
                    </div>
            )
        )}
        </div>
            
    )
}