import prisma from "@/lib/prisma";

export default async function getData(): Promise<any> {
  try {
    const data = await prisma.user.findMany();
    return data;
  } catch (error) {
    return JSON.stringify({
      msg: "Ocorreu um erro inesperado. Tente novamente.",
    });
  }
}
