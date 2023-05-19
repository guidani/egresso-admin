import Comp from "./Comp";
import LinkButton from "./components/LinkButton";
import getData from "./services/getData";

export default async function Home() {
  const data = await getData();
  console.log("🚀 ~ file: page.tsx:6 ~ Home ~ data:", data);
  return (
    <main className="flex min-h-screen flex-col px-2">
      <h1 className="mt-4 mb-2 text-2xl">Painel Administrativo</h1>
      <hr />
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <LinkButton to="/cursos" label="Cursos" />
        <LinkButton to="/campus" label="Campus" />
        <LinkButton to="/egressos" label="Egressos" />
      </div>
      {/* <div>
        <Comp dados={data}/>
      </div> */}
    </main>
  );
}
