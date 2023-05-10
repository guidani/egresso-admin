"use client";
import BackButton from "@/app/components/BackButton";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const [valor, setValor] = useState("");
  async function addCursoToDatabase() {
    if(valor.trim() == ""){
      window.alert("Insira o nome do curso.")
      return;
    }
    window.alert(valor.trim())
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.value);
    setValor(e.target.value);
  }

  return (
    <>
      <div className="flex min-h-screen flex-col px-2">
        <BackButton/>
        <h1 className="mt-4 mb-2 text-2xl">Adicionar novo curso</h1>
        <hr />
        <div className="bg-white px-16 py-4 border-t-8 border-green-700">
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
                <button className="bg-red-700 rounded-md px-8 py-2 text-white">cancelar</button>
              </Link>
              <button onClick={addCursoToDatabase}  className="bg-green-700 rounded-md px-8 py-2 text-white">
                adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
