import express from "express";
import { getUserData, makeConnectionWithSupervisor} from "../controllers/doctors.js";

const router=express.Router()

router.route("/getuser/:user").get(getUserData)
router.route("/update").post(makeConnectionWithSupervisor)

export default router