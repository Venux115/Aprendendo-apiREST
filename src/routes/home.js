import { Router } from "express"
import HomeController from "../controller/Home.js"
const router = new Router()

router.get("/", (HomeController.index))

export default router
