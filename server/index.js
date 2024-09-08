import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv"
import { Server as SocketServer } from "socket.io";
//importing the routeres
import UserRouter from "./routes/users.js"
import PatientRouter from "./routes/patients.js"
import DoctorRouter from "./routes/doctors.js"
import SupervisorRouter from "./routes/supervisor.js"

dotenv.config()
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});
app.post("/sample", (req, res) => {
  res.json({ message: "Example" });
});

// using the routes
app.use("/api/user",UserRouter)
app.use("/api/patient",PatientRouter)
app.use("/api/doctor",DoctorRouter)
app.use("/api/supervisor",SupervisorRouter)

// socket connections bro 
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (msg) => {
    // Broadcast the message to all clients except the sender
    socket.broadcast.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
