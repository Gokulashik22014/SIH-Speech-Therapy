import express from "express";
import { getUserData} from "../controllers/patients.js";

const router=express.Router()

router.route("/getuser/:user").get(getUserData)

export default router