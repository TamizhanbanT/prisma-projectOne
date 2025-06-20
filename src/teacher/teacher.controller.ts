import { Request, Response } from "express";
import * as teacherService from "../teacher/teacher.service";

export const createTeacher = async (req: Request, res: Response) => {
  try {
    const teacher = await teacherService.createTeacher(req.body);
    res.status(201).json(teacher);
  } catch (err) {
    res.status(400).json({ message: "Error creating teacher", error: err });
  }
};

export const getAllTeachers = async (_req: Request, res: Response) => {
  const teachers = await teacherService.getAllTeachers();
  res.status(200).json(teachers);
};

export const getTeacherById = async (req: Request, res: Response) :Promise<void> => {
  const id = +req.params.id;
  const teacher = await teacherService.getTeacherById(id);
  if (!teacher) res.status(404).json({ message: "Teacher not found" });
  res.status(200).json(teacher);
  return
};

export const updateTeacher = async (req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    const teacher = await teacherService.updateTeacher(id, req.body);
    res.status(200).json(teacher);
  } catch (err) {
    res.status(400).json({ message: "Error updating teacher", error: err });
  }
};

export const deleteTeacher = async (req: Request, res: Response):Promise<void> => {
  const id = +req.params.id;
  const teacher = await teacherService.getTeacherById(id);
  if (!teacher)  res.status(404).json({ message: "Teacher not found" });

  await teacherService.deleteTeacher(id);
  res.status(204).send();
  return
};
