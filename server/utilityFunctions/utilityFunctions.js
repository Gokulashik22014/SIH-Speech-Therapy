import { Query } from "appwrite";
import { databases } from "../appwriteLib.js";
import config from "../config.js";
export const getUser = async (user, collectionId) => {
  try {
    const result = await databases.listDocuments(config.dbId, collectionId, [
      Query.equal("username", user),
    ]);
    console.log(result);
    return result.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllUser = async (id) => {
  try {
    const result = await databases.listDocuments(config.dbId, id);
    console.log(result);
    return result.documents;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const makeConnection=async(collectionId,firstId,updateInfo)=>{
  try {
    await databases.updateDocument(config.dbId,collectionId,firstId,updateInfo)
  } catch (error) {
    console.log(error);
    return null;
  }
}