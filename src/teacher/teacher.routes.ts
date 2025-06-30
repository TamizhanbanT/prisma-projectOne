import express from "express";
import * as teacherController from "./teacher.controller";
import { validate } from "../middleware/validate";
import {
  teacherSchema,
  updateTeacherSchema,
} from "../teacher/teacherValidator";

const router = express.Router();

router.post("/", validate(teacherSchema), teacherController.createTeacher);
router.get("/", teacherController.getAllTeachers);
router.get("/:id", teacherController.getTeacherById);
router.put("/:id", validate(updateTeacherSchema), teacherController.updateTeacher);
router.delete("/:id", teacherController.deleteTeacher);

export default router;
