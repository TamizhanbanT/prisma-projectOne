import { Request, Response } from "express";
import * as classService from "./class.service";

export const createClass = async (req: Request, res: Response) => {
  try {
    const data = await classService.createClass(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: "Failed to create class", error: err });
  }
};

export const getAllClasses = async (_req: Request, res: Response) => {
  const data = await classService.getAllClasses();
  res.json(data);
};

export const getClassById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = await classService.getClassById(id);
  if (data) res.json(data);
  else res.status(404).json({ message: "Class not found" });
};

export const updateClass = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { newClassId } = req.body;

  try {
    const data = await classService.updateClass(id, newClassId);
    res.json(data);
  } catch (err: any) {
    if (err.code === "P2025") {
      res.status(404).json({ message: "Class not found" });
    } else {
      res.status(400).json({ message: "Failed to update class", error: err });
    }
  }
};

export const deleteClass = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await classService.deleteClass(id);
    res.status(204).send(); // ✅ Updated to send 204
  } catch (err: any) {
    if (err.code === "P2025") {
      res.status(404).json({ message: "Class not found" });
    } else {
      res.status(400).json({ message: "Failed to delete class", error: err });
    }
  }
};





