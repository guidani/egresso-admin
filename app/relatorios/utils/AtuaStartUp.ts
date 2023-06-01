import prisma from "@/lib/prisma";

export async function AtuaStartUp() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["atua_startup"],
    _count: {
      atua_startup: true
    },
  });

  return resp;
}