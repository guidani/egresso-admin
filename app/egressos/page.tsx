import Link from "next/link";
import EgressoLista from "./components/EgressoLista";

export const revalidate = 10;

export default async function Page() {
  // const egressos = await getEgressoForm();
  // const lista_de_egressos = egressos.data;

  return (
    <>
      <div className="flex min-h-screen flex-col px-2 mb-4">
        {/*  */}
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href={"/"}>Início</Link>
            </li>
            <li>Egressos</li>
          </ul>
        </div>
        {/*  */}
        <h1 className="mt-4 mb-2 text-2xl">Egressos</h1>
        <hr />
        <EgressoLista />
      </div>
    </>
  );
}
