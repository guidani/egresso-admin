import prisma from "@/lib/prisma";

export const getCursos = async () => {
  try {
    const cursos = await prisma.curso.findMany();
    return cursos;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};
