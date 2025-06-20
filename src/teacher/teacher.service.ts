import prisma from "../../utils/db";

// Create a new teacher
export const createTeacher = (data: { name: string; classId: number }) => {
  return prisma.teacher.create({ data });
};

// Get all teachers with related class info
export const getAllTeachers = () => {
  return prisma.teacher.findMany({
    include: { class: true }, 
  });
};

// Get a specific teacher by ID with class info
export const getTeacherById = (id: number) => {
  return prisma.teacher.findUnique({
    where: { id },
    include: { class: true }, 
  });
};

// Update teacher
export const updateTeacher = (
  id: number,
  data: { name?: string; classId?: number }
) => {
  return prisma.teacher.update({
    where: { id },
    data,
  });
};

// Delete teacher
export const deleteTeacher = (id: number) => {
  return prisma.teacher.delete({ where: { id } });
};
