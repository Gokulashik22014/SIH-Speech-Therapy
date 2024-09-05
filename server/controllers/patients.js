import { Query } from "appwrite";
import {databases,config} from "../config.js"
import { getUser } from "../utilityFunctions/utilityFunctions.js";

// book appointment
// register with the supervisor
export const getUserData=async(req,res)=>{
    try {
        const {user}=req.params
        const result=await getUser(user,config.patientsId)
        res.json({success:true,result:result})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error})
    }
}