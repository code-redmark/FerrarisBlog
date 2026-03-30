import Teca from "../models/Teca.js";
import Post from "../models/Post.js"

export async function getTecas(req, res) {
    try {
        const tecas = await Teca.find()
        if (!tecas) return res.status(404).json({ message: "tecas not found" })
        res.json(tecas)
    } catch (err) {
        res.status(500).json({message: err.message})
        console.log(err)
    }
}

export async function getPopulatedTecas(req, res) {
    try {
        const popTecas = await Teca.find().populate("class")
        if (!popTecas) return res.status(404).json({ message: "Populated (class field) tecas not found" })
        res.json(popTecas)
    } catch (err) {
        res.status(500).json({ message: err.message })
        console.log(err)
    }
}

export async function getTecabyId(req, res) {
    const id = req.params.id
    try {
        const teca = await Teca.findById(id)
        if (!teca) return res.status(404).json({ message: "Teca not found" })
        res.json(teca)
    } catch (err) {
        res.status(500).json({ message: err.message })
        console.log(err)
    }
}

export async function getPopulatedTecabyId(req, res) {
    const id = req.params.id
    try {
        const teca = await Teca.findById(id).populate("class")
        if (!teca) return res.status(404).json({ message: "Teca not found" })
        res.json(teca)
    } catch (err) {
        res.status(500).json({ message: err.message })
        console.log(err)
    }
}

export async function getTecaChildren(req, res) {
    const idTeca = req.params.id
    try {
        const teca = await Teca.findById(idTeca)
        if (!teca) return res.status(404).json({ message: `Teca not found`})

        const classId = teca.class?._id ?? teca.class;
        const children = await Post.find({ class: classId, parentTeca: idTeca })
        if (!children) {
            return res.status(404).json({ message: "Teca children not found" })
        }
        
        res.json(children)
    } catch (err) {
        res.status(500).json({ message: `Error looking for Teca children: ${err.message}` })
        console.log(err)
    }
}