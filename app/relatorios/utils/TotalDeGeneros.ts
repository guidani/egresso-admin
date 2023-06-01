import prisma from "@/lib/prisma";

export async function TotaldeGeneros() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["genero"],
    _count: {
      genero: true
    },
  });

  return resp;
}