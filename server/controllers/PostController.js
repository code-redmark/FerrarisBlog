import Class from "../models/Classe.js";
import Post from "../models/Post.js";

export async function getPosts(req, res) {
    try {
        const posts = await Post.find()
        if (!posts) return res.status(404).json({ message: "Posts not found" })
        res.json(posts)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

export async function getPopulatedPosts(req, res) {
    try {
        const popPosts = await Post.find().populate("class")
        if (!popPosts) return res.status(404).json({ message: "Populated (class field) Posts not found" })
        res.json(popPosts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export async function getPostbyId(req, res) {
    const id = req.params.id
    try {
        const post = await Post.findById(id)
        if (!post) return res.status(404).json({ message: "Post not found" })
        res.json(post)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export async function getPopulatedPostbyId(req, res) {
    const id = req.params.id
    try {
        const post = await Post.findById(id).populate("class")
        if (!post) return res.status(404).json({ message: "Post not found" })
        res.json(post)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export async function getTecaChildren(req, res) {
    const idTeca = req.params.id
    try {
        const teca = await Post.findById(idTeca)
        if (!teca) return res.status(404).json({ message: "Teca not found" })
        const children = await Post.find({ class: teca.class._id, parentPost: teca._id })
        if (!teca) return res.status(404).json({ message: "Teca children not found" })
        res.json(children)
    } catch {
        res.status(500).json({ message: `Error looking for Teca children: ${err.message}` })
    }
}

export async function getClassPosts(req, res) {
    const ClassId = req.params.ClassId
    try {
        const classPosts = await Post.find({ class: ClassId })
        if (!classPosts) return res.status(404).json({ message: "Posts not found" })
        res.json(classPosts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export async function getClassTeche(req, res) {
    const ClassId = req.params.ClassId
    try {
        const classTeche = await Post.find({ class: ClassId, parentPost: null})
        if (!classTeche) return res.status(404).json({ message: "Teches not found" })
        res.json(classTeche)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}