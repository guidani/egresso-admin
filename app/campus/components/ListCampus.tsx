"use client";

import DelButton from "@/app/components/DelButton";
import { useEffect, useState } from "react";

export default function ListCampus() {
  const [campus, setCampus] = useState<Campus[] | []>([]);

  const [wasDeleted, setWasDeleted] = useState<boolean | null>(null);

  async function deleteCampus(id: string) {
    return await fetch("/api/campus" + `?id=${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setWasDeleted(true);
      })
      .catch();
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/campus", { method: "GET" });
      const json = await data.json();
      setCampus(json.data);
    };

    fetchData().catch(console.error);
  }, [wasDeleted]);
  return (
    <ul>
      {!campus ? (
        <li>Sem dados...</li>
      ) : (
        campus.map((c) => {
          return (
            <li
              key={c.id}
              className=" border-b-2 border-slate-100 flex items-center justify-between py-2"
            >
              {c.name}
              <DelButton handleClick={() => deleteCampus(c.id)}/>
              {/* <button onClick={() => deleteCampus(c.id)}>DEL</button> */}
            </li>
          );
        })
      )}
    </ul>
  );
}
