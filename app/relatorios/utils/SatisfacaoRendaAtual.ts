import prisma from "@/lib/prisma";

export async function SatisfacaoRendaAtual() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["satisfacao_renda_atual"],
    _count: {
      satisfacao_renda_atual: true
    },
  });

  return resp;
}