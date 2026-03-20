import mongoose, { mongo, Schema } from "mongoose";

const Post = new Schema({
    title: String,
    description: String,
    content: String,
    dataPost: Date,
    slug: String
})

export default mongoose.model("Post", Post, "posts")