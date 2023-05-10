import BackButton from "../components/BackButton";
import IconTrash from "../components/icons/IconTrash";

export default function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col px-2">
        <BackButton />
        <h1 className="mt-4 mb-2 text-2xl">Egressos</h1>
        <hr />

        <div className="bg-white p-2 border-t-8 border-green-700 mt-4">
          <ul>
            <li className=" border-b-2 border-slate-100 flex items-center justify-between py-2">
              Fulano de tal <IconTrash />
            </li>
            <li className=" border-b-2 border-slate-100 flex items-center justify-between py-2">
              Cicrano <IconTrash />
            </li>
            <li>item</li>
          </ul>
        </div>
      </div>
    </>
  );
}
