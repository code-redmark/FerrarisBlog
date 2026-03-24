import express from "express"
import * as PostController from "../controllers/PostController.js"

const router = express.Router()

router.get("/", PostController.getPosts)
router.get("/pop", PostController.getPopulatedPosts)

router.get("/id/:id", PostController.getPostbyId)
router.get("/id/:id/pop", PostController.getPopulatedPostbyId)

router.get("/class/:ClassId/", PostController.getClassPosts)

export default router