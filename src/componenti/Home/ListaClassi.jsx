import { Link } from "react-router-dom"
import "../../stile/ListaClassi.css"

export default function ListaClassi({ classi }) {
    return (
        
        <div className="ListaClassi">
            {
                classi.map(classe => (
                    <div key={classe._id} className="RiquadroClasse">
                        <Link id="LinkRiquadro" to={`/classe/${classe.anno}${classe.sezione}/${classe._id}`}>
                            <div className="Contenitore_Classe_Top">
                                <div className="Contenitore_Sezione">
                                    <h1 className="Sezione">{classe.anno}{classe.sezione}</h1>
                                </div>
                                <div className="Contenitore_Numero_Post">
                                    <h1 className="Numero_Post">[numero] post</h1>
                                </div>
                            </div>
                            <div className="Contenitore_Classe_Bottom">
                                <div className="Contenitore_Biografia_Classe">
                                    <h1 className="Biografia_Classe">biografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test testbiografia classe test test test test test test test test test test test test test test test test test test test</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
            )
        )}
        </div>
            
    )
}