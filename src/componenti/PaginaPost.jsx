import ReactMarkdown from 'react-markdown'
import Testa from './base/Testa'
import Piedi from './base/Piedi'
import "../stile/PaginaPost.css"

export default function PaginaPost({post}) {
    return (

        <div>
            <Testa></Testa>

            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>

            <Piedi></Piedi>

        </div>

        
    )
}