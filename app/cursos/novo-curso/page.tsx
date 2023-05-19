"use client";
import BackButton from "@/app/components/BackButton";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const [name, setName] = useState("");

  async function fetchCursoToDatabase() {
    try {
      const body = { name };
      await fetch("http://localhost:3000/api/curso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  }

  // async function addCursoToDatabase() {
  //   if (name.trim() == "") {
  //     window.alert("Insira o nome do curso.");
  //     return;
  //   } else {
  //     // await add_curso(name)
  //   }
  // }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <>
      <div className="flex min-h-screen flex-col px-2">
        <BackButton />
        <h1 className="mt-4 mb-2 text-2xl">Adicionar novo curso</h1>
        <hr />
        <div className="bg-white px-4 md:px-16 py-4 border-t-8 border-green-700">
          <div id="form" className="flex flex-col">
            <label htmlFor="nomeCurso">Nome do curso</label>
            <input
              type="text"
              name="nomeCurso"
              id="nomeCurso"
              className="border rounded-md border-slate-900"
              onChange={(e) => handleChange(e)}
            />
            <div className="flex gap-2 mt-2 justify-end">
              <Link href={"/cursos"}>
                <button className="bg-red-700 rounded-md px-8 py-2 text-white">
                  cancelar
                </button>
              </Link>
              <button
                onClick={fetchCursoToDatabase}
                className="bg-green-700 rounded-md px-8 py-2 text-white"
              >
                adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
