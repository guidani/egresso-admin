import Link from "next/link";
import LinkButton from "../shared/LinkButton";
import ListCampus from "./components/ListCampus";

export default async function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col px-2">
        {/*  */}
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href={"/"}>Início</Link>
            </li>
            <li>Campus</li>
          </ul>
        </div>
        {/*  */}
        <h1 className="mt-4 mb-2 text-2xl">Campus</h1>
        <hr />
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <LinkButton label="Novo campus" to="/campus/novo-campus" />
        </div>
        <div className="bg-white p-2 border-t-8 border-green-700 mt-4">
          <ListCampus />
        </div>
      </div>
    </>
  );
}
