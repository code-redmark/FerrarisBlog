import { createContext } from "react";

export const ContextClassi = createContext();

/**
 * Componente semi-globale che fa un solo fetch delle classi
 * e che le contiene per farle arrivare aa gli altri componenti
 * senza fare 1457613475 fetch
 */
export function ProviderClassi({ children }) {
    
    const [ datiClassi, setDatiClassi ] = useState({ classi: [] });

    useEffect(() => {
        fetch(`${process.env.SERVER}/classes`)
            .then(res => res.json())
            .then(data => setDatiClassi(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <ContextClassi.Provider value={datiClassi}>
            {children}
        </ContextClassi.Provider>
    );

}