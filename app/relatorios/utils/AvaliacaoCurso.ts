import prisma from "@/lib/prisma";

export async function AvaliacaoCurso() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["avaliacao_curso", "curso_realizado"],
    _count: {
      avaliacao_curso: true,
    },
  });

  return resp;
}
