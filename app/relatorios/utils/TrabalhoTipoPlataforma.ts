import prisma from "@/lib/prisma";

export async function TrabalhoTipoPlataforma() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["tipo_plataforma"],
    _count: {
      tipo_plataforma: true
    },
  });

  return resp;
}