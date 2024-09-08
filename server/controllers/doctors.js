import { Query } from "appwrite";
import {databases} from "../appwriteLib.js"
import { getUser } from "../utilityFunctions/utilityFunctions.js";
import config from "../config.js";

// book appointment
// register with the supervisor
export const getUserData=async(req,res)=>{
    try {
        const {user}=req.params
        const result=await getUser(user,config.doctorsId)
        res.json({success:true,result:result})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error})
    }
}

export const makeConnectionWithSupervisor=async(req,res)=>{
    try {
        const {user,supervisor}=req.body
        const result=await getUser(user,config.doctorsId)
        console.log(user,supervisor,result)
        await databases.updateDocument(config.dbId,config.doctorsId,result.$id,{supervisors:supervisor})
        const supervisorData=await databases.getDocument(config.dbId,config.supervisorsId,supervisor)
        const doctorList=[...supervisorData.doctors,result.$id]
        await databases.updateDocument(config.dbId,config.supervisorsId,supervisor,{doctors:doctorList})
        res.json({success:true})
    } catch (error) {
        console.log(error)
    }
}