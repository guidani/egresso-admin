import LinkCardButton from "./components/LinkCardButton";
import IconRelatorio from "./components/icons/IconRelatorio";
import IconBook from "./components/icons/iconBook";
import IconBuilding from "./components/icons/iconBuilding";
import IconEgresso from "./components/icons/iconEgresso";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col px-2 mb-4">
      <h1 className="mt-4 mb-2 text-2xl">Painel Administrativo</h1>
      <hr />
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <LinkCardButton
          label="Cursos"
          to="/cursos"
          icon={<IconBook height={64} width={64} />}
        />
        <LinkCardButton
          label="Campus"
          to="/campus"
          icon={<IconBuilding height={64} width={64} />}
        />
        <LinkCardButton
          label="Egressos"
          to="/egressos"
          icon={<IconEgresso height={64} width={64} />}
        />
        <LinkCardButton
          label="Relatórios"
          to="/relatorios"
          icon={<IconRelatorio height={64} width={64} />}
        />
      </div>
    </main>
  );
}
