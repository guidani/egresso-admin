import prisma from "@/lib/prisma";

export default async function get_cursos(): Promise<any> {
  try {
    const data = await prisma.curso.findMany();
    return data;
  } catch (error) {
    return JSON.stringify({msg: "Ocorreu um erro inesperado. Tente novamente."})
    
  }
}