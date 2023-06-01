import Link from "next/link";
import Stats from "./components/Stats";
import StatsContainer from "./components/StatsContainer";
import { AtuaStartUp } from "./utils/AtuaStartUp";
import { AvaliacaoCurso } from "./utils/AvaliacaoCurso";
import { ModalidadeTrabalho } from "./utils/ModalidadeTrabalho";
import { RendimentoMedioMensal } from "./utils/RendimentoMedioMensal";
import { SatisfacaoRendaAtual } from "./utils/SatisfacaoRendaAtual";
import { SegmentoMercadoAtuacao } from "./utils/SegmentoMercadoAtuacao";
import { SetorAtuacao } from "./utils/SetorAtuacao";
import { SituacaoTrabalhoEstudos } from "./utils/SituacaoTrabalhoEstudos";
import { TempoExperiencia } from "./utils/TempoExperiencia";
import { TipoContrato } from "./utils/TipoContrato";
import { TotalConclusaoPorCampus } from "./utils/TotalConclusaoPorCampus";
import { TotalConclusaoPorCurso } from "./utils/TotalConclusaoPorCurso";
import { TotalDeCadastros } from "./utils/TotalDeCadastros";
import { TotaldeGeneros } from "./utils/TotalDeGeneros";
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
  const tipo_contrato = await TipoContrato();
  const modalidade_trabalho = await ModalidadeTrabalho();
  const tempo_experiencia = await TempoExperiencia();

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
          {/*  */}
          <StatsContainer title="Por gênero">
            {total_generos.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.genero}
                  value={campo._count.genero}
                />
              );
            })}
          </StatsContainer>
          <StatsContainer title="Por Campus">
            {total_conclusao_por_campus.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.campus_conclusao_curso?.replaceAll("_", " ")}
                  value={campo._count.campus_conclusao_curso}
                />
              );
            })}
          </StatsContainer>
          {/*  */}
          <StatsContainer title="Por Curso">
            {total_conclusao_por_curso.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.curso_realizado?.replaceAll("_", " ")}
                  value={campo._count.curso_realizado}
                />
              );
            })}
          </StatsContainer>
          {/*  */}
          <StatsContainer title="Avaliação Por Curso">
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
          </StatsContainer>
          {/*  */}
          <StatsContainer title="Situação quanto a trabalho e estudos">
            {situacao_trabalho_estudos.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.situacao_trabalho_estudo?.replaceAll("_", " ")}
                  value={campo._count.situacao_trabalho_estudo}
                />
              );
            })}
          </StatsContainer>
          {/*  */}
          <StatsContainer title="Setor de atuação">
            {setor_atuacao.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.setor_atuacao?.replaceAll("_", " ")}
                  value={campo._count.setor_atuacao}
                />
              );
            })}
          </StatsContainer>
          {/*  */}
          <StatsContainer title="Segmento de Mercado Atuação">
            {segmento_mercado_atuacao.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.segmento_mercado?.replaceAll("_", " ")}
                  value={campo._count.segmento_mercado}
                />
              );
            })}
          </StatsContainer>
          {/*  */}
          <StatsContainer title="Atuação em StartUp">
            {atuacao_startup.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.atua_startup?.replaceAll("_", " ")}
                  value={campo._count.atua_startup}
                />
              );
            })}
          </StatsContainer>
          {/*  */}
          <StatsContainer title="Rendimento medio mensal">
            {rendimento_medio_mensal.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.rendimento_medio?.replaceAll("_", " ")}
                  value={campo._count.rendimento_medio}
                />
              );
            })}
          </StatsContainer>
          {/*  */}
          <StatsContainer title="Satisfação com a renda atual">
            {satisfacao_renda_atual.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.satisfacao_renda_atual?.replaceAll("_", " ")}
                  value={campo._count.satisfacao_renda_atual}
                />
              );
            })}
          </StatsContainer>

          {/*  */}
          <StatsContainer title="Tipo de plataforma em que trabalha">
            {trabalho_tipo_plataforma.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.tipo_plataforma?.replaceAll("_", " ")}
                  value={campo._count.tipo_plataforma}
                />
              );
            })}
          </StatsContainer>
          {/*  */}
          <StatsContainer title="Tipo de Contrato">
            {tipo_contrato.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.tipo_contrato?.replaceAll("_", " ")}
                  value={campo._count.tipo_contrato}
                />
              );
            })}
          </StatsContainer>
          {/*  */}
          <StatsContainer title="Modalidade de Trabalho">
            {modalidade_trabalho.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.modalidade_trabalho?.replaceAll("_", " ")}
                  value={campo._count.modalidade_trabalho}
                />
              );
            })}
          </StatsContainer>
          {/*  */}
          <StatsContainer title="Tempo de experiência">
            {tempo_experiencia.map((campo, index) => {
              return (
                <Stats
                  key={index}
                  title={campo.tempo_exp?.replaceAll("_", " ")}
                  value={campo._count.tempo_exp}
                />
              );
            })}
          </StatsContainer>
        </div>
      </div>
    </>
  );
}
