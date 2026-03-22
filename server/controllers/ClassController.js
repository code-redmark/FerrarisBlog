import Class from '../models/Classe.js'

export async function getClasses(req, res) {
    try {
        const foundClasses = await Class.find();
        if (!foundClasses) return res.status(404).json({ message: "Classes not found"})
        res.json(foundClasses)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

export async function getClassById(req, res) {
    try {
        const foundClass = await Class.findById(req.params.id)
        if (!foundClass) return res.status(404).json({ message: "Class not found" })
        res.json(foundClass)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}
