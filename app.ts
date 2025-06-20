import express from "express";
import classRoutes from "./src/class/class.routes";
import studentRoutes from "./src/student/student.routes";
import teacherRoutes from "./src/teacher/teacher.routes";



const app = express();
app.use(express.json());

app.use("/classes", classRoutes);

app.use("/students", studentRoutes);

app.use("/teachers", teacherRoutes);


export default app;
