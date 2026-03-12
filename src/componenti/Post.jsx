import ReactMarkdown from "react-markdown"

export function RenderPost({ post }) {
    return (
        <div>
            <h1 className="TitoloPost">{post.title}</h1>

            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>
        </div>
    )
}

export function PaginaPost({ post }) {
    return (
        <div className="PaginaPost">
            <RenderPost post={post}></RenderPost>
        </div>
    )
}