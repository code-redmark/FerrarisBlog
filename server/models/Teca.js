import mongoose, { model, Schema } from "mongoose";

const TecaSchema = new Schema({
    title: String,
    description: String,

    cover: String,
    images: [String],
    
    slug: String,
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    }
})

export default model("Teca", TecaSchema, "teche")