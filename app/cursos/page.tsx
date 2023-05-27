import BackButton from "../components/BackButton";
import LinkButton from "../components/LinkButton";
import ListCourses from "./components/ListCourses";

export default async function Page() {
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
          <ListCourses />
          </ul>
        </div>
      </div>
    </>
  );
}
