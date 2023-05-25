import BackButton from "../components/BackButton";
import LinkButton from "../components/LinkButton";
import IconTrash from "../components/icons/IconTrash";
import DelBtn from "./components/DelBtn";
import { getCampus } from "./services/getCampus";

// export const revalidade = 0;

export default async function Page() {
  const campus = await getCampus();

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
            {campus.map((camp) => {
              return (
                <li
                  key={camp.id}
                  className=" border-b-2 border-slate-100 flex items-center justify-between py-2"
                >
                  {camp.name}
                  <IconTrash />
                  <DelBtn id={camp.id}/>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
