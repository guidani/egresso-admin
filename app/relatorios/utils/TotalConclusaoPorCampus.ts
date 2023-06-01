import prisma from "@/lib/prisma";

export async function TotalConclusaoPorCampus() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["campus_conclusao_curso"],
    _count: {
      campus_conclusao_curso: true,
    },
  });

  return resp;
}
