import { Client, Account, Databases, ID } from "appwrite";
import config from "./config.js";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(config.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
