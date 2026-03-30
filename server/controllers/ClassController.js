import Class from '../models/Classe.js'
import Teca from '../models/Teca.js'

export async function getClasses(req, res) {
    try {
        const foundClasses = await Class.find();
        if (!foundClasses) return res.status(404).json({ message: "Classes not found"})
        res.json(foundClasses)
    } catch(err) {
        res.status(500).json({ message: err.message })
        console.log(err)
    }
}

export async function getClassById(req, res) {
    try {
        const foundClass = await Class.findById(req.params.id)
        if (!foundClass) return res.status(404).json({ message: "Class not found" })
        res.json(foundClass)
    } catch(err) {
        res.status(500).json({ message: err.message })
        console.log(err)
    }
    console.log("getClass")
}

export async function getClassTecas(req, res) {
    const id = req.params.id
    
    try {
        const classTecas = await Teca.find({ class: id })
        if (!classTecas) return res.status(404).json({ message: "tecas not found" })
        res.json(classTecas)
    } catch (err) {
        res.status(500).json({ message: err.message })
        console.log(err)
    }
    console.log("getClassTecas")
}