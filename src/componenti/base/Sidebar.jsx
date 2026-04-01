
import ListaClassi from '../Home/ListaClassi'
import { SidebarContext } from '../../pagine/Home'
import { useContext } from 'react'

/**
 * 
 * Per ora contiene solo ListaClassi ma è un modo 
 * di tenere tutte le future cose che potremmo mettere
 */

export default function Sidebar() {

    const { isOpen } = useContext(SidebarContext)

    return (
        <div className={`sidebar ${isOpen ? 'shifted' : ''}`}>
            <ListaClassi />
        </div>
    )
}