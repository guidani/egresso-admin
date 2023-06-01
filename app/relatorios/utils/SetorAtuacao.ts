import prisma from "@/lib/prisma";

export async function SetorAtuacao() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["setor_atuacao"],
    _count: {
      setor_atuacao: true
    },
  });

  return resp;
}