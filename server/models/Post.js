import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    title: String,
    description: String,
    content: String,
    dataPost: Date,
    slug: String,

    cover: String, // cloudinary picture public ID
    
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    },
    parentTeca: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },

});

export default mongoose.model("Post", PostSchema, "posts")