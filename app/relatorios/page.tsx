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
import { AtuaStartUp } from "./utils/AtuaStartUp";
import { RendimentoMedioMensal } from "./utils/RendimentoMedioMensal";
import { SatisfacaoRendaAtual } from "./utils/SatisfacaoRendaAtual";
import { TrabalhoTipoPlataforma } from "./utils/TrabalhoTipoPlataforma";

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
  const atuacao_startup = await AtuaStartUp();
  const rendimento_medio_mensal = await RendimentoMedioMensal();
  const satisfacao_renda_atual = await SatisfacaoRendaAtual();
  const trabalho_tipo_plataforma = await TrabalhoTipoPlataforma();

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
          <section>
            <h2>Atuação em StartUp</h2>
            <div className="flex">
              {atuacao_startup.map((campo, index) => {
                return (
                  <Stats
                    key={index}
                    title={campo.atua_startup?.replaceAll("_", " ")}
                    value={campo._count.atua_startup}
                  />
                );
              })}
            </div>
          </section>
          <section>
            <h2>Rendimento medio mensal</h2>
            <div className="flex">
              {rendimento_medio_mensal.map((campo, index) => {
                return (
                  <Stats
                    key={index}
                    title={campo.rendimento_medio?.replaceAll("_", " ")}
                    value={campo._count.rendimento_medio}
                  />
                );
              })}
            </div>
          </section>
          <section>
            <h2>Satisfação com a renda atual</h2>
            <div className="flex">
              {satisfacao_renda_atual.map((campo, index) => {
                return (
                  <Stats
                    key={index}
                    title={campo.satisfacao_renda_atual?.replaceAll("_", " ")}
                    value={campo._count.satisfacao_renda_atual}
                  />
                );
              })}
            </div>
          </section>
          <section>
            <h2>Tipo de plataforma em que trabalha</h2>
            <div className="flex">
              {trabalho_tipo_plataforma.map((campo, index) => {
                return (
                  <Stats
                    key={index}
                    title={campo.tipo_plataforma?.replaceAll("_", " ")}
                    value={campo._count.tipo_plataforma}
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
