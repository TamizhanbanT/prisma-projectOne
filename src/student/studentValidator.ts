import { z } from "zod";

// For creating one student
export const studentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  classId: z.number().int().positive("classId must be a positive number"),
});

// For updating a student (name and/or classId)
export const updateStudentSchema = z.object({
  name: z.string().min(1).optional(),
  classId: z.number().int().positive().optional(),
});

// For creating many students (bulk)
export const studentArraySchema = z.array(studentSchema);
