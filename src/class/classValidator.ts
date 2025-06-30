import { z } from "zod";

// Validation for creating a class
export const classSchema = z.object({
  classId: z.number({
    required_error: "classId is required",
    invalid_type_error: "classId must be a number",
  }).int().positive(),
});

// Validation for updating classId
export const updateClassSchema = z.object({
  newClassId: z.number({
    required_error: "newClassId is required",
    invalid_type_error: "newClassId must be a number",
  }).int().positive(),
});
