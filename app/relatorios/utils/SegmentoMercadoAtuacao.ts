import prisma from "@/lib/prisma";

export async function SegmentoMercadoAtuacao() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["segmento_mercado"],
    _count: {
      segmento_mercado: true
    },
  });

  return resp;
}