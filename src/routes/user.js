import { Router } from "express"
import UserController from "../controller/User.js"
const router = new Router()

router.get("/", (UserController.index))
router.post("/create", (UserController.create))

export default router
