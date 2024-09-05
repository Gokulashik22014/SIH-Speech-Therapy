import express from "express";
import { getAllUsers, getUserData} from "../controllers/supervisor.js";

const router=express.Router()

router.route("/getuser/:user").get(getUserData)
router.route("/getusers").get(getAllUsers)

export default router