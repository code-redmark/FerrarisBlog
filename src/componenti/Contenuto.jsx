import "./Contenuto.css"

export default function Contenuto({children, larghezza, altezza}) {
    return (
        <div className="Contenuto" style={{ width: larghezza, height: altezza}}>{children}</div>
    )
}