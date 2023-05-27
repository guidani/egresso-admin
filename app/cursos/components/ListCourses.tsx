"use client";

import { useEffect, useState } from "react";
import DelBtn from "./DelBtn";

export default function ListCourses() {
  const [cursos, setCursos] = useState<Curso[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/curso");
      const json = await data.json();
      setCursos(json);
    };

    fetchData().catch(console.error);
  }, []);
  return (
    <div>
      <h1>Lista curso CLIENT SIDE</h1>
      <ul>
        {cursos.map((c) => {
          return (
            <li
              key={c.id}
              className=" border-b-2 border-slate-100 flex items-center justify-between py-2"
            >
              {c.name}
              <DelBtn id={c.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
