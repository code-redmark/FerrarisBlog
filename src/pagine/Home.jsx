import ListaClassi from "../componenti/Home/ListaClassi.jsx"
import ListaHighlight from "../componenti/Home/ListaHighlight.jsx"

import "../stile/pagine/Home.css"
import "../stile/ClassiHome.css"

export default function Home() {

      
    return (
        <div>
            <div className="pc">

                <div id="content">
                    <ListaClassi/>
                    <ListaHighlight/>
                </div>

            </div>

            <div className="mobile">
                <div id="content">
                    <ListaHighlight/>
                </div>
            </div>

        </div>
        
    )
}