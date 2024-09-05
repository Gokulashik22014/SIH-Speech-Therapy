import express from "express";
import { assignDoctor, getAllUsers, getUserData} from "../controllers/supervisor.js";

const router=express.Router()

router.route("/getuser/:user").get(getUserData)
router.route("/getusers").get(getAllUsers)
router.route("/assign").post(assignDoctor)

export default router