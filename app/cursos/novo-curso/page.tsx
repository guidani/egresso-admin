"use client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [isEmpty, setIsEmpty] = useState<null | boolean>(null);

  async function fetchCursoToDatabase() {
    try {
      if (!name) {
        setIsEmpty(true);
        return;
      }
      const body = { name };
      const resp = await fetch("/api/curso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (resp.ok) {
        setName("");
        if (confirm("Curso adicionado com sucesso!")) {
          setName("");
          window.location.reload();
        }
      }
    } catch (error) {
      return JSON.stringify({
        msg: "Ocorreu um erro inesperado. Tente novamente.",
      });
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setIsEmpty(false);
    setName(e.target.value);
  }

  return (
    <>
      <div className="flex min-h-screen flex-col px-2">
        {/*  */}
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              
              <Link href={'/'}>Início</Link>
            </li>
            <li>
            <Link href={'/cursos'}>Cursos</Link>
            </li>
            <li>Novo Curso</li>
          </ul>
        </div>
        {/*  */}
        <h1 className="mt-4 mb-2 text-2xl">Adicionar novo curso</h1>
        <hr />
        <div className="bg-white px-4 md:px-16 py-4 border-t-8 border-green-700">
          <div id="form" className="flex flex-col">
            <label htmlFor="nomeCurso" className="label">
              <span className="label-text">Nome do curso</span>
            </label>
            <input
              type="text"
              name="nomeCurso"
              id="nomeCurso"
              autoFocus
              className="input input-bordered w-full"
              onChange={(e) => handleChange(e)}
            />
            {isEmpty && (
              <span className="text-red-500">
                Este campo não pode ser vazio
              </span>
            )}
            <div className="flex gap-2 mt-2 justify-end">
              <Link href={"/cursos"}>
                <button className="btn btn-error btn-active hover:opacity-80">
                  cancelar
                </button>
              </Link>
              <button
                onClick={fetchCursoToDatabase}
                className="btn  btn-success hover:opacity-80"
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
