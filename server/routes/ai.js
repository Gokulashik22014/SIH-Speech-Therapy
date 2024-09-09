import express from "express";
import { getResponse } from "../controllers/ai.js";

const router=express.Router()

router.route("/summarize").post(getResponse)

export default router