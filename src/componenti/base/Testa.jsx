import { Link } from 'react-router-dom'

import "../../stile/base/Testa.css"

export default function Testa() {
    return (
        <main>
            <div className='Testa'>
            <ul id='ListaTesta'>
                <li>
                    <Link to="/">
                        <img id="logo" src="/FerrarisBlog/assets/img/logolight.png" alt="logo" />
                    </Link>
                        <Link to="/" className='TastoHome'>
                        <p className='TestoHome'>Home</p>
                        <div id='arcobaleno' className="arcobaleno_tasto_home"></div>
                    </Link>
                        <Link className='ChiSiamo'>
                        <p className='TestoHome'>Chi Siamo</p>
                    <div id='arcobaleno' className="arcobaleno_tasto_chi_siamo"></div>
                    </Link>
                    <div className="open_scrollbar_div">
                        <button onClick={() => setIsOpen(!isOpen)} id="scrlbr_btn" className="open_scrollbar_button">
                            <p>bottone scrollbar</p>
                        </button>
                    </div>
                </li>
            </ul>
            </div>
            <div id='arcobaleno' style={{height: "3px"}}></div>
        </main>
        
    )
}