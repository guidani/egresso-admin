import prisma from "@/lib/prisma";

export async function RendimentoMedioMensal() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["rendimento_medio"],
    _count: {
      rendimento_medio: true
    },
  });

  return resp;
}