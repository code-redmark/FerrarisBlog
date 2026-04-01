import { Link } from "react-router-dom"
import datiClassi from "../../classi.json"

import "../../stile/ClassiHome.css"

export default function ListaClassi() {
    return (
        
        <div className="ListaClassi">
            {
                datiClassi.classi.map(classe => (
                  
                    <div key={classe.id} className="RiquadroClasse">
                        <Link id="LinkRiquadro" to={`/classe/${classe.id}`}>
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