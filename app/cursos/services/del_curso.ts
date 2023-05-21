import prisma from "@/lib/prisma";

export default async function del_curso(curso_id: string): Promise<any> {
  try {
    const data = await prisma.curso.delete({
      where: {
        id: curso_id,
      },
    });
    return data;
  } catch (error) {
    return JSON.stringify({msg: "Ocorreu um erro inesperado. Tente novamente."})
    
  }
}
