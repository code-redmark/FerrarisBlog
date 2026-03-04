import "../../stile/Contenuto.css"

export default function Contenuto({children, larghezza, altezza}) {
    return (
        <div className="Contenuto" style={{
                '--larghezza': larghezza,
                '--altezza': altezza
            }}
        >
            {children}

        </div>
    )
}