import "../App.css"

import ListaClassi from "../componenti/Home/ListaClassi.jsx"
import ListaHighlight from "../componenti/Home/ListaHighlight.jsx"

import "../stile/pagine/Home.css"
import "../stile/ClassiHome.css"

import { useState } from "react"
import { createContext, useContext } from "react";

export const SidebarContext = createContext();

export function SidebarProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </SidebarContext.Provider>
    );
}

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