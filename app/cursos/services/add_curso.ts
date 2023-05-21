import prisma from "@/lib/prisma";

export default async function add_curso(curso_nome: string): Promise<any> {
  try {
    const data = await prisma.curso.create({
      data: {
        name: curso_nome
      }
    });
    return data;
  } catch (error) {
    return JSON.stringify({msg: "Ocorreu um erro inesperado. Tente novamente."})
  }
}