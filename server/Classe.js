import mongoose from "mongoose";

/**
 * Lo schema è appunto uno "schema" che utilizziamo per qualunque dato all'interno del database
 * lo schema dei post conterrà tutti i metadati di un determinato post
 */

const SchemaClasse = new mongoose.Schema({
    anno: Number,
    sezione: String,
    bio: String,

    
    posts: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Post" }
    ]

});


/**
 * Mongoose.model crea una collection in MongoDB usando lo schema dato,
 * una collection è un insieme di documenti, un documento solitamente è ad esempio
 * un file json, come quello che conterrà tutte le classi, MongoDB nomina questa collection
 * automaticamente con il plurale del documento, altrimenti, come ho fatto io, prende il terzo 
 * argomento
 */


export default mongoose.model("Class", SchemaClasse, "classes")