import express from "express";
import * as studentController from "./student.controller";
import { validate } from "../middleware/validate";
import {
  studentSchema,
  updateStudentSchema,
  studentArraySchema,
} from "../student/studentValidator"

const router = express.Router();

router.post("/", validate(studentSchema), studentController.createStudent);
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.put("/:id", validate(updateStudentSchema), studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);
router.post("/bulk", validate(studentArraySchema), studentController.createManyStudents);

export default router;
