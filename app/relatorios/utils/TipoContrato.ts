import prisma from "@/lib/prisma";

export async function TipoContrato() {
  const resp = await prisma.egressoForm.groupBy({
    by: ["tipo_contrato"],
    _count: {
      tipo_contrato: true
    },
  });

  return resp;
}