"use client";
import BackButton from "@/app/components/BackButton";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const [valor, setValor] = useState("");
  async function addCampusToDatabase() {
    if (valor.trim() == "") {
      window.alert("Insira o nome do campus.");
      return;
    }
    window.alert(valor.trim());
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.value);
    setValor(e.target.value);
  }

  return (
    <>
      <div className="flex min-h-screen flex-col px-2">
        <BackButton />
        <h1 className="mt-4 mb-2 text-2xl">Adicionar novo campus</h1>
        <hr />
        <div className="bg-white px-4 md:px-16 py-4 border-t-8 border-green-700">
          <div id="form" className="flex flex-col">
            <label htmlFor="nomeCampus">Nome do campus</label>
            <input
              type="text"
              name="nomeCampus"
              id="nomeCampus"
              className="border rounded-md border-slate-900"
              onChange={(e) => handleChange(e)}
            />
            <div className="flex gap-2 mt-2 justify-end">
              <Link href={"/campus"}>
                <button className="bg-red-700 rounded-md px-8 py-2 text-white">
                  cancelar
                </button>
              </Link>
              <button
                onClick={addCampusToDatabase}
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
