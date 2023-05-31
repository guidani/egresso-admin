export async function getEgressoForm() {
  const path = await import("../../api/egresso/route");

  return await (await path.GET()).json();
}
