import { Request, Response } from "express";
import * as studentService from "./student.service";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const data = await studentService.createStudent(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: "Failed to create student", error: err });
  }
};

export const getAllStudents = async (_req: Request, res: Response) => {
  const data = await studentService.getAllStudents();
  res.json(data);
};

export const getStudentById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = await studentService.getStudentById(id);
  if (data) res.json(data);
  else res.status(404).json({ message: "Student not found" });
};

export const updateStudent = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const data = await studentService.updateStudent(id, req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: "Failed to update student", error: err });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const data = await studentService.deleteStudent(id);
    res.json({ message: "Deleted successfully", deleted: data });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete student", error: err });
  }
};

export const createManyStudents = async (req: Request, res: Response) => {
  try {
    const data = await studentService.createManyStudents(req.body);
    res.status(201).json({ message: "Students created", count: data.count });
  } catch (err) {
    res.status(400).json({ message: "Bulk creation failed", error: err });
  }
};

