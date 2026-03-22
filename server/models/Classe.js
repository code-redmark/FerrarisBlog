import mongoose from "mongoose";

const SchemaClasse = new mongoose.Schema({
    anno: Number,
    sezione: String,
    bio: String,
});

export default mongoose.model("Class", SchemaClasse, "classes")