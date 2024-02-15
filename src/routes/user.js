import { Router } from "express"
import UserController from "../controller/User.js"
const router = new Router()

router.get("/", (UserController.index))
router.post("/create", (UserController.create))
router.get("/show", (req,res)=>{})
router.delete("/delete", (req,res)=>{})
router.put("/update", (req,res)=>{})

export default router
