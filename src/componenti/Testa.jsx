import { Link } from 'react-router-dom'
import "./Testa.css"

export default function Testa() {
    return (
        <div className='Testa'>
            <ul id="ListaTesta">
                <li><Link to="/">FerrarisBlog</Link></li>
                <li><Link to="/Orientamento">Orientamento</Link></li>
            </ul>
        </div>
    )
}