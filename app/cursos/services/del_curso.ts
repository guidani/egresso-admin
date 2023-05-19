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
    console.log("🚀 ~ file: getData.ts:5 ~ getData ~ error:", error);
    return { error };
  }
}
