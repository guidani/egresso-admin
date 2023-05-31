import BackButton from "../components/BackButton";
import EgressoLista from "./components/EgressoLista";
import { getEgressoForm } from "./services/getEgressoForm";

export const revalidate = 10;

export default async function Page() {
  const egressos = await getEgressoForm();
  const lista_de_egressos = egressos.data;

  return (
    <>
      <div className="flex min-h-screen flex-col px-2 mb-4">
        <BackButton />
        <h1 className="mt-4 mb-2 text-2xl">Egressos</h1>
        <hr />
        <EgressoLista egressos={lista_de_egressos} />
      </div>
    </>
  );
}
