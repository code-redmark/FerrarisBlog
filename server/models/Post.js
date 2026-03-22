import mongoose, { mongo, Schema } from "mongoose";

const PostSchema = new Schema({
    title: String,
    description: String,
    content: String,
    dataPost: Date,
    slug: String,
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    }
});

export default mongoose.model("Post", PostSchema, "posts")