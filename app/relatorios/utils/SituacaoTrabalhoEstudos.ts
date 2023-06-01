import prisma from "@/lib/prisma";

export async function SituacaoTrabalhoEstudos() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["situacao_trabalho_estudo"],
    _count: {
      situacao_trabalho_estudo: true
    },
  });

  return resp;
}
