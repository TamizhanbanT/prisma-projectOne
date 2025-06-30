import { z } from "zod";

// For creating a teacher
export const teacherSchema = z.object({
  name: z.string().min(1, "Name is required"),
  classId: z.number().int().positive("classId must be a positive number"),
});

// For updating a teacher
export const updateTeacherSchema = z.object({
  name: z.string().min(1).optional(),
  classId: z.number().int().positive().optional(),
});
