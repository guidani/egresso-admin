"use client";

import DelButton from "@/app/shared/DelButton";
import { useEffect, useState } from "react";

type PageProps = {
  egressos: Array<any>;
};

export default function EgressoLista() {
  const [egressosForm, setEgressosForm] = useState<EgressoForm[] | []>([]);

  const [wasDeleted, setWasDeleted] = useState<boolean | null>(null);

  async function deleteEgressoForm(id: string) {
    if (confirm("Tem certeza que deseja apagar essa entrada?")) {
      return await fetch("/api/egresso" + `?id=${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setWasDeleted(true);
        })
        .catch();
    }
  }

  useEffect(() => {
    setWasDeleted(null);
    const fetchData = async () => {
      const data = await fetch("/api/egresso", { method: "GET" });
      const json = await data.json();
      setEgressosForm(json.data);
    };
    fetchData().catch(console.error);
  }, [wasDeleted]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-compact table-zebra w-full">
          <thead>
            <tr className="">
              <th>Ações</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Genero</th>
              <th>Data de Nascimento</th>
              <th>Ano de conclusao do curso</th>
              <th>Campus</th>
              <th>Curso realizado</th>
              <th>Avaliação do curso</th>
              <th>Situação atual</th>
              <th>Setor</th>
              <th>Segmento de mercado</th>
              <th>Atua em startup</th>
              <th>Rendimento medio</th>
              <th>Satisfação com a renda</th>
              <th>Plataforma</th>
              <th>Contrato</th>
              <th>Modalidade</th>
              <th>Tempo Experiência</th>
            </tr>
          </thead>
          <tbody>
            {egressosForm?.map((egresso) => {
              return (
                <tr key={egresso.id} className="hover">
                  <td>
                    <label>
                      <DelButton
                        handleClick={() => deleteEgressoForm(egresso.id)}
                      />
                    </label>
                  </td>
                  <td>{egresso.nome}</td>
                  <td>{egresso.email}</td>
                  <td>{egresso.genero}</td>
                  <td>{egresso.data_de_nascimento}</td>
                  <td>{egresso.ano_conclusao_curso}</td>
                  <td>{egresso.campus_conclusao_curso}</td>
                  <td>{egresso.curso_realizado}</td>
                  <td>{egresso.avaliacao_curso}</td>
                  <td>{egresso.situacao_trabalho_estudo}</td>
                  <td>{egresso.setor_atuacao}</td>
                  <td>{egresso.segmento_mercado}</td>
                  <td>{egresso.atua_startup}</td>
                  <td>{egresso.rendimento_medio}</td>
                  <td>{egresso.satisfacao_renda_atual}</td>
                  <td>{egresso.tipo_plataforma}</td>
                  <td>{egresso.tipo_contrato}</td>
                  <td>{egresso.modalidade_trabalho}</td>
                  <td>{egresso.tempo_exp}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
