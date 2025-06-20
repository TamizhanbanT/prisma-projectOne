import prisma from "../../utils/db";

export const createClass = async (data: { classId: number }) => {
  return await prisma.class.create({ data });
};

export const getAllClasses = async () => {
  return await prisma.class.findMany({
    include: {
      students: true,
      teachers: true,
    },
  });
};

export const getClassById = async (id: number) => {
  return await prisma.class.findUnique({
    where: { classId: id },
    include: {
      students: true,
      teachers: true,
    },
  });
};

export const updateClass = async (id: number, newClassId: number) => {
  return await prisma.class.update({
    where: { classId: id },
    data: { classId: newClassId },
  });
};

export const deleteClass = async (id: number) => {
  return await prisma.class.delete({
    where: { classId: id },
  });
};



// import prisma from "../../utils/db";


// export const createClass = async (data: { classId: number }) => {
//   return await prisma.class.create({ data });
// };

// export const getAllClasses = async () => {
//   return await prisma.class.findMany({
//     include: {
//       students: true,
//       teachers: true,
//     },
//   });
// };

// export const getClassById = async (id: number) => {
//   return await prisma.class.findUnique({
//     where: { classId: id },
//     include: {
//       students: true,
//       teachers: true,
//     },
//   });
// };

// export const updateClass = async (id: number, newClassId: number) => {
//   return await prisma.class.update({
//     where: { classId: id },
//     data: { classId: newClassId },
//   });
// };

// export const deleteClass = async (id: number) => {
//   return await prisma.class.delete({
//     where: { classId: id },
//   });
// };
