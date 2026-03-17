import "../App.css"

import ListaClassi from "../componenti/Home/ListaClassi.jsx"
import ListaHighlight from "../componenti/Home/ListaHighlight.jsx"

import "../stile/pagine/Home.css"
import "../stile/ClassiHome.css"

import { useState } from "react"

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    // State della sidebar
    let [sidebar, toggleBar] = useState(false);
    let barClass;

    if (sidebar) {
        barClass = 'aperta';
    } else barClass = 'chiusa';

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
                    <button className="sidebar_button">
                        <p>Le</p>
                        <p>Classi</p>
                    </button>
                    <div className='sidebar'>
                        <ListaClassi/>
                    </div>
                </div>
            </div>

        </div>
        
    )
}