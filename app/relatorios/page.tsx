import Link from "next/link";
import Stats from "./components/Stats";
import { AvaliacaoCurso } from "./utils/AvaliacaoCurso";
import { SetorAtuacao } from "./utils/SetorAtuacao";
import { SituacaoTrabalhoEstudos } from "./utils/SituacaoTrabalhoEstudos";
import { TotalConclusaoPorCampus } from "./utils/TotalConclusaoPorCampus";
import { TotalConclusaoPorCurso } from "./utils/TotalConclusaoPorCurso";
import { TotalDeCadastros } from "./utils/TotalDeCadastros";
import { TotaldeGeneros } from "./utils/TotalDeGeneros";
import { SegmentoMercadoAtuacao } from "./utils/SegmentoMercadoAtuacao";

export const revalidate = 60;

export default async function Relatorios() {
  const total_de_cadastros = await TotalDeCadastros();
  const total_generos = await TotaldeGeneros();
  const total_conclusao_por_campus = await TotalConclusaoPorCampus();
  const total_conclusao_por_curso = await TotalConclusaoPorCurso();
  const avaliacao_curso = await AvaliacaoCurso();
  const situacao_trabalho_estudos = await SituacaoTrabalhoEstudos();
  const setor_atuacao = await SetorAtuacao();
  const segmento_mercado_atuacao = await SegmentoMercadoAtuacao();

  return (
    <>
      <div className="flex min-h-screen flex-col px-2">
        {/*  */}
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href={"/"}>Início</Link>
            </li>
            <li>Relatórios</li>
          </ul>
        </div>
        {/*  */}
        <h1 className="mt-4 mb-2 text-2xl">Relatórios</h1>
        <hr />
        <div className="grid">
          <section>
            <h2>Cadastros</h2>
            <Stats title={"Total de cadastros"} value={total_de_cadastros} />
          </section>
          <section>
            <h2>Por gênero</h2>
            <div className="flex">
              {total_generos.map((campo, index) => {
                return (
                  <Stats
                    key={index}
                    title={campo.genero}
                    value={campo._count.genero}
                  />
                );
              })}
            </div>
          </section>
          <section>
            <h2>Por Campus</h2>
            <div className="flex">
              {total_conclusao_por_campus.map((campo, index) => {
                return (
                  <Stats
                    key={index}
                    title={campo.campus_conclusao_curso?.replaceAll("_", " ")}
                    value={campo._count.campus_conclusao_curso}
                  />
                );
              })}
            </div>
          </section>
          <section>
            <h2>Por Curso</h2>
            <div className="flex">
              {total_conclusao_por_curso.map((campo, index) => {
                return (
                  <Stats
                    key={index}
                    title={campo.curso_realizado?.replaceAll("_", " ")}
                    value={campo._count.curso_realizado}
                  />
                );
              })}
            </div>
          </section>
          <section>
            <h2>Avaliação Por Curso</h2>
            <div className="flex">
              {avaliacao_curso.map((campo, index) => {
                return (
                  <Stats
                    key={index}
                    title={campo.avaliacao_curso?.replaceAll("_", " ")}
                    value={campo._count.avaliacao_curso}
                    description={campo.curso_realizado?.replaceAll("_", " ")}
                  />
                );
              })}
            </div>
          </section>
          <section>
            <h2>Situação quanto a trabalho e estudos</h2>
            <div className="flex">
              {situacao_trabalho_estudos.map((campo, index) => {
                return (
                  <Stats
                    key={index}
                    title={campo.situacao_trabalho_estudo?.replaceAll("_", " ")}
                    value={campo._count.situacao_trabalho_estudo}
                  />
                );
              })}
            </div>
          </section>
          <section>
            <h2>Setor de atuação</h2>
            <div className="flex">
              {setor_atuacao.map((campo, index) => {
                return (
                  <Stats
                    key={index}
                    title={campo.setor_atuacao?.replaceAll("_", " ")}
                    value={campo._count.setor_atuacao}
                  />
                );
              })}
            </div>
          </section>
          <section>
            <h2>Segmento de Mercado Atuação</h2>
            <div className="flex">
              {segmento_mercado_atuacao.map((campo, index) => {
                return (
                  <Stats
                    key={index}
                    title={campo.segmento_mercado?.replaceAll("_", " ")}
                    value={campo._count.segmento_mercado}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
