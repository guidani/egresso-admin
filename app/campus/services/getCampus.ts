import prisma from "@/lib/prisma";

export const getCampus = async () => {
  try {
    const campus = await prisma.campus.findMany();
    return campus;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};
