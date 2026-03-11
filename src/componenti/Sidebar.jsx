import { useState } from "react";
import ListaClassi from "./ListaClassi";
import "../stile/Sidebar.css"

export default function Sidebar({children}) {
    let [bar, toggleBar] = useState(false)

    let name;
    if (bar) {
        name = "aperta"
    } else name = "chiusa"

    return (
        <div>
            <button className="sidebar_button" onClick={() => toggleBar(!bar)}>LE CLASSI</button>
            <div className={`sidebar ${name}`}>
                    {children}
            </div>
        </div>
        
    )
    
}