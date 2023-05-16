import prisma from "@/lib/prisma";

export default async function getData(): Promise<any> {
  try {
    const data = await prisma.user.findMany();
    return data;
  } catch (error) {
    console.log("🚀 ~ file: getData.ts:5 ~ getData ~ error:", error);
    return { error };
  }
}
