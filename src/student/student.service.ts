import prisma from "../../utils/db";


export const createStudent = async (data: { name: string; classId: number }) => {
  return await prisma.student.create({ data });
};

export const getAllStudents = async () => {
  return await prisma.student.findMany({
    include: {
      class: true, // joins with class table
    },
  });
};

export const getStudentById = async (id: number) => {
  return await prisma.student.findUnique({
    where: { id },
    include: {
      class: true,
    },
  });
};

export const updateStudent = async (
  id: number,
  data: { name?: string; classId?: number }
) => {
  return await prisma.student.update({
    where: { id },
    data,
  });
};

export const deleteStudent = async (id: number) => {
  return await prisma.student.delete({
    where: { id },
  });
};
export const createManyStudents = async (
  data: { name: string; classId: number }[]
) => {
  return await prisma.student.createMany({
    data,
    skipDuplicates: true, // optional: skips records with same unique fields
  });
};