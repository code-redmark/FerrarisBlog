import express from 'express'
import { AuthFunction } from '../controllers/AuthController'

const router = express.Router()

router.post('/auth/login', AuthFunction)

export default router