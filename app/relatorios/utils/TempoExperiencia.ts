import prisma from "@/lib/prisma";

export async function TempoExperiencia() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["tempo_exp"],
    _count: {
      tempo_exp: true
    },
  });

  return resp;
}