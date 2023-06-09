import { auth } from "@clerk/nextjs";
import LinkCardButton from "./shared/LinkCardButton";
import IconRelatorio from "./shared/icons/IconRelatorio";
import IconBook from "./shared/icons/iconBook";
import IconBuilding from "./shared/icons/iconBuilding";
import IconEgresso from "./shared/icons/iconEgresso";

export default async function Home() {
  const { sessionClaims } = auth();

  const orgRole = Object.values(sessionClaims?.organizations || "")[0];

  if (orgRole !== "admin") {
    return <p>Você não tem permissão para ver essa página</p>;
  }

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
