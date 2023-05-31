"use client";

type PageProps = {
  egressos: Array<any>;
};

export default function EgressoLista({ egressos }: PageProps) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-compact table-zebra w-full">
          <thead>
            <tr className="">
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
            {egressos?.map((egresso) => {
              return (
                <tr key={egresso.id} className="hover">
                  <th>
                    <label >
                      <button type="button" className="btn btn-square bg-red-700">
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
                      </button>
                    </label>
                  </th>
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
