import mongoose, { mongo, Schema } from "mongoose";

export const PostSchema = new Schema({
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

export const PostModel = mongoose.model("Post", PostSchema, "posts")