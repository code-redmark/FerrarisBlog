import express from "express"
import * as ClassController from "../controllers/ClassController.js"

const router = express.Router()

router.get("/", ClassController.getClasses)
router.get("/:id", ClassController.getClassById);

export default router