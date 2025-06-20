import express from "express";
import * as studentController from "./student.controller";

const router = express.Router();

// Create
router.post("/", studentController.createStudent);

// Read all
router.get("/", studentController.getAllStudents);

// Read one
router.get("/:id", studentController.getStudentById);

// Update
router.put("/:id", studentController.updateStudent);

// Delete
router.delete("/:id", studentController.deleteStudent);

router.post("/bulk", studentController.createManyStudents);


export default router;
