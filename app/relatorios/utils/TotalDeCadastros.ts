import prisma from "@/lib/prisma";

export async function TotalDeCadastros() {
  const resp = await prisma.egressoForm.count({});

  return resp;
}
