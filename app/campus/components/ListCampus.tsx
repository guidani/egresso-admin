"use client";

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
      .catch()
      .finally(() => setWasDeleted(null));
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/campus");
      const json = await data.json();
      setCampus(json);
    };

    fetchData().catch(console.error);
  }, [wasDeleted]);
  return (
    <ul>
      {campus.map((c) => {
        return (
          <li
            key={c.id}
            className=" border-b-2 border-slate-100 flex items-center justify-between py-2"
          >
            {c.name}
            <button onClick={() => deleteCampus(c.id)}>DEL</button>
          </li>
        );
      })}
    </ul>
  );
}
