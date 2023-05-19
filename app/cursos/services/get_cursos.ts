import prisma from "@/lib/prisma";

export default async function get_cursos(): Promise<any> {
  try {
    const data = await prisma.curso.findMany();
    return data;
  } catch (error) {
    console.log("🚀 ~ file: getData.ts:5 ~ getData ~ error:", error);
    return { error };
  }
}