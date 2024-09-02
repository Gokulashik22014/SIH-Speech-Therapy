import { Client, Account, Databases, ID } from "appwrite";
export const config = {
  projectId: "66d418bc00060b1e773e",
  dbId: "66d4665400271ddfd8a3",
  userDbId: "66d4667a0033a7e8ca70",
};

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(config.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
