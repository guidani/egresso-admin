"use client";

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
              <button onClick={() => deleteCourse(c.id)}>DEL</button>
            </li>
          );
        })
      )}
    </>
  );
}
