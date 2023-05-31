"use client";

import DelButton from "@/app/components/DelButton";
import { useEffect, useState } from "react";

export default function ListCourses() {
  const [cursos, setCursos] = useState<Curso[] | []>([]);

  const [wasDeleted, setWasDeleted] = useState<boolean | null>(null);

  async function deleteCourse(id: string) {
    return await fetch("/api/curso" + `?id=${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setWasDeleted(true);
      })
      .catch();
  }

  useEffect(() => {
    setWasDeleted(null);
    const fetchData = async () => {
      const data = await fetch("/api/curso", { method: "GET" });
      const json = await data.json();
      setCursos(json.data);
    };
    fetchData().catch(console.error);
  }, [wasDeleted]);

  return (
    <>
      {!cursos ? (
        <li>Sem dados...</li>
      ) : (
        cursos.map((c) => {
          return (
            <li
              key={c.id}
              className=" border-b-2 border-slate-100 flex items-center justify-between py-2"
            >
              {c.name}
              <DelButton handleClick={() => deleteCourse(c.id)} />
              {/* <button
                type="button"
                className="btn btn-square bg-red-700"
                onClick={() => deleteCourse(c.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </button> */}
            </li>
          );
        })
      )}
    </>
  );
}
