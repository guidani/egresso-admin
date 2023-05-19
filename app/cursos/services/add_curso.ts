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
    console.log("🚀 ~ file: getData.ts:5 ~ getData ~ error:", error);
    return { error };
  }
}