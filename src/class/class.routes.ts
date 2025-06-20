import express from "express";
import * as classController from "./class.controller";

const router = express.Router();

// Create
router.post("/", classController.createClass);

// Read all
router.get("/", classController.getAllClasses);

// Read one
router.get("/:id", classController.getClassById);

// Update
router.put("/:id", classController.updateClass);

// Delete
router.delete("/:id", classController.deleteClass);

export default router;
