import { account, config, databases } from "../config.js";
import { v4 as uuidv4 } from "uuid";
export const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const id = uuidv4();
    const user = await account.create(id, email, password);
    const userDb = await databases.createDocument(
      config.dbId,
      config.userDbId,
      id,
      { email: email, role: role, username: username }
    );
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await account.createEmailPasswordSession(email, password);
    if (response) {
      res.json({ success: true });
      return;
    }
    res.json({ success: false });
  } catch (error) {
    console.log(error);
  }
};
