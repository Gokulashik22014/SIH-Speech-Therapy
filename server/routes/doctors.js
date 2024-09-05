import express from "express";
import { getUserData} from "../controllers/doctors.js";

const router=express.Router()

router.route("/getuser/:user").get(getUserData)


export default router