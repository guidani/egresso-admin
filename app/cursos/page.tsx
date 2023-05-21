import BackButton from "../components/BackButton";
import LinkButton from "../components/LinkButton";
import IconTrash from "../components/icons/IconTrash";

export default async function Page() {
  const resp = await fetch("http://localhost:3000/api/curso", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const cursos: Curso[] = await resp.json();
  console.log("🚀 ~ file: page.tsx:13 ~ Page ~ cursos:", cursos);

  return (
    <>
      <div className="flex min-h-screen flex-col px-2">
        <BackButton />
        <h1 className="mt-4 mb-2 text-2xl">Cursos</h1>
        <hr />
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <LinkButton label="Novo curso" to="/cursos/novo-curso" />
        </div>
        <div className="bg-white p-2 border-t-8 border-green-700 mt-4">
          <ul>
            {cursos.map((curso) => {
              return (
                <li
                  key={curso.id}
                  className=" border-b-2 border-slate-100 flex items-center justify-between py-2"
                >
                  {curso.name}
                  <IconTrash />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
