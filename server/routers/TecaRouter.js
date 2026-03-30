import express from "express"
import * as TecaController from "../controllers/TecaController.js"

const router = express.Router()

router.get("/", TecaController.getTecas)
router.get("/pop", TecaController.getPopulatedTecas)

router.get("/id/:id", TecaController.getTecabyId)
router.get("/id/:id/pop", TecaController.getPopulatedTecabyId)

router.get("/id/:id/children",TecaController.getTecaChildren)

export default router