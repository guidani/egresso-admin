import prisma from "@/lib/prisma";

export async function TotalConclusaoPorCurso() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["curso_realizado"],
    _count: {
      curso_realizado: true
    },
  });

  return resp;
}
