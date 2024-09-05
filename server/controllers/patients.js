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

export const makeConnectionWithSupervisor=async(req,res)=>{
    try {
        const {user,supervisor}=req.body
        const result=await getUser(user,config.patientsId)
        console.log(user,supervisor,result)
        await databases.updateDocument(config.dbId,config.patientsId,result.$id,{supervisors:supervisor})
        const supervisorData=await databases.getDocument(config.dbId,config.supervisorsId,supervisor)
        const patientList=[...supervisorData.patients,result.$id]
        await databases.updateDocument(config.dbId,config.supervisorsId,supervisor,{patients:patientList})
        res.json({success:true})
    } catch (error) {
        console.log(error)
    }
}