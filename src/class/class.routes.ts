import express from "express";
import * as classController from "./class.controller";
import { validate } from "../middleware/validate";
import { classSchema, updateClassSchema } from "../class/classValidator";

const router = express.Router();

// Create Class with validation
router.post("/", validate(classSchema), classController.createClass);

// Get all classes
router.get("/", classController.getAllClasses);

// Get single class
router.get("/:id", classController.getClassById);

// Update classId with validation
router.put("/:id", validate(updateClassSchema), classController.updateClass);

// Delete
router.delete("/:id", classController.deleteClass);

export default router;
