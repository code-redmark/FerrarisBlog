import "../App.css"

import ListaClassi from "../componenti/Home/ListaClassi.jsx"
import ListaHighlight from "../componenti/Home/ListaHighlight.jsx"

import "../stile/pagine/Home.css"
import "../stile/ClassiHome.css"

import { useState } from "react"
import { createContext, useContext } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);    
    
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
                    <div className={`sidebar ${isOpen ? 'aperta' : 'chiusa'}`}>
                        <ListaClassi/>
                    </div>
                </div>
            </div>

        </div>
        
    )
}