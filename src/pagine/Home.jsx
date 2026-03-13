import Testa from "../componenti/base/Testa.jsx"
import Contenuto from '../componenti/base/Contenuto.jsx'
import Piedi from "../componenti/base/Piedi.jsx"

import ListaClassi from "../componenti/Home/ListaClassi.jsx"
import ListaHighlight from "../componenti/Home/ListaHighlight.jsx"

import "../stile/base/Contenitore.css"
import "../App.css"
import Sidebar from "../componenti/Sidebar.jsx"

export default function Home() {
    return (
        <main>
            <Testa></Testa>

            <div id="arcobaleno" style={{height: "0.5vh"}}/>
            
            <div className="Contenitore">
 
                <Contenuto larghezza="15%" altezza="141.3vh">

                    <div className="pc" style={{backgroundColor: "#222", flex: 1}}>
                        <div className="HeaderContenuto">
                        <h1 className="LeClassi">Le Classi</h1>
                        </div>
                            <ListaClassi />
                    </div>
                
                </Contenuto>

                <Contenuto larghezza="85%" altezza="141.3vh">
                    <ListaHighlight></ListaHighlight>
                    <Piedi></Piedi>
                </Contenuto>
                
                <div className="mobile">
                    {/** Stesse cose ma con una sidebar*/}
                    <Sidebar>
                        <ListaClassi />
                    </Sidebar>
                </div>
            </div>
        </main>
        
    )
}