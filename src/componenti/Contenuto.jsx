import "./Contenuto.css"

export default function Contenuto({children, larghezza}) {
    return (
        <div className="Contenuto" style={{ width: larghezza }}>{children}</div>
    )
}