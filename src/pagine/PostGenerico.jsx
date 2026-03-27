import PaginaPost from "./post/PaginaPost";
import PaginaTeca from "./post/PaginaTeca";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPostById } from "../api/Post.mjs";
import Caricamento from "./Caricamento";


export default function PostGenerico() {

    const [ data, setDatiPost ] = useState(null);
    const { idPost } = useParams();
    
    useEffect(() => {
        fetchPostById(idPost)
            .then( data => setDatiPost(data))
    }, [idPost])

    if (!data) return <Caricamento />

    if (!data.parentPost) {
        return <PaginaTeca />
    } else return <PaginaPost />


}