import Testa from "../componenti/base/Testa.jsx"
import Contenuto from '../componenti/base/Contenuto.jsx'
import Piedi from "../componenti/base/Piedi.jsx"

import ListaClassi from "../componenti/ListaClassi.jsx"
import ListaHighlight from "../componenti/ListaHighlight.jsx"

import "../stile/base/Contenitore.css"
import "../App.css"
import Sidebar from "../componenti/Sidebar.jsx"

export default function Home() {
    return (
        <main>
            <Testa></Testa>
            <div id="arcobaleno"/>

            <div className="Contenitora">

                <div className="pc">
                    <Contenuto larghezza="15%" altezza="120vh">
                    <div className="HeaderContenuto">
                        <h1 className="Le Classi" style={{fontFamily:"contenuto"}}>Le Classi</h1>
                    </div>
                    <ListaClassi />
                    </Contenuto>

                    <Contenuto larghezza="85%" altezza="120vh">
                        <ListaHighlight></ListaHighlight>
                    </Contenuto>
                </div>

                <div className="mobile">
                    {/** Stesse cose ma con una sidebar*/}
                    <Sidebar>
                        <ListaClassi />
                    </Sidebar>
                </div>

                

            </div>

            <Piedi></Piedi>
        </main>
        
    )
}