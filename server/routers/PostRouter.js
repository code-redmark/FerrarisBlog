import express from "express"
import * as PostController from "../controllers/PostController.js"

const router = express.Router()

router.get("/", PostController.getPosts)
router.get("/pop", PostController.getPopulatedPosts)

router.get("/id/:id", PostController.getPostbyId)
router.get("/id/:id/pop", PostController.getPopulatedPostbyId)

router.get("/id/:id/children", PostController.getTecaChildren)

router.get("/class/:ClassId/", PostController.getClassPosts)
router.get("/class/:ClassId/teche", PostController.getClassTeche)


export default router