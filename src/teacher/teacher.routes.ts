import express from "express";
import * as teacherController from "../teacher/teacher.controller";

const router = express.Router();

router.post("/", teacherController.createTeacher);
router.get("/", teacherController.getAllTeachers);
router.get("/:id", teacherController.getTeacherById);
router.put("/:id", teacherController.updateTeacher);
router.delete("/:id", teacherController.deleteTeacher);

export default router;
