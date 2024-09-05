import { Query } from "appwrite";
import { databases, config } from "../config.js";
import { getAllUser, getUser } from "../utilityFunctions/utilityFunctions.js";

// book appointment
// register with the supervisor
export const getUserData = async (req, res) => {
  try {
    const { user } = req.params;
    const result = await getUser(user, config.supervisorsId);
    res.json({ success: true, result: result });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const result = await getAllUser(config.supervisorsId);
    res.json({ success: true, result: result });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

export const assignDoctor = async (req, res) => {
  try {
    const {patientId,doctorId}=req.body
    const doctorData=await databases.getDocument(config.dbId,config.doctorsId,doctorId)
    const patientList=[...doctorData.patients,patientId]
    await databases.updateDocument(config.dbId,config.doctorsId,doctorId,{patients:patientList})
    await databases.updateDocument(config.dbId,config.patientsId,patientId,{doctors:doctorId})
    res.json({success:true})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};
