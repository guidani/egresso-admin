import BackButton from "../components/BackButton";
import LinkButton from "../components/LinkButton";
import IconTrash from "../components/icons/IconTrash";

export default function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col px-2">
        <BackButton />
        <h1 className="mt-4 mb-2 text-2xl">Campus</h1>
        <hr />
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <LinkButton label="Novo campus" to="/campus/novo-campus" />
        </div>
        <div className="bg-white p-2 border-t-8 border-green-700 mt-4">
          <ul>
            <li className=" border-b-2 border-slate-100 flex items-center justify-between py-2">
              Teresina Central <IconTrash />
            </li>
            <li className=" border-b-2 border-slate-100 flex items-center justify-between py-2">
              Teresina Zona Sul <IconTrash />
            </li>
            <li>item</li>
          </ul>
        </div>
      </div>
    </>
  );
}
