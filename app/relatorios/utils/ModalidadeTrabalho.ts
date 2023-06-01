import prisma from "@/lib/prisma";

export async function ModalidadeTrabalho() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["modalidade_trabalho"],
    _count: {
      modalidade_trabalho: true
    },
  });

  return resp;
}