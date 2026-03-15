import Testa from './base/Testa'
import Piedi from './base/Piedi'
import "../stile/PaginaPost.css"
import ReactMarkdown from "react-markdown"

export default function PaginaPost({post}) {
    return (

        <div>
            <div className='TitoloPost'>

            </div>

            <div className='CorpoPost'>
                <ReactMarkdown>
                {post.content}
                </ReactMarkdown>
            </div>
            
        </div>

        
    )
}