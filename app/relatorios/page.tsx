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
import GeneroChart from "./graficos/GeneroChart";

export const revalidate = 60;

export default async function Relatorios() {
  const total_de_cadastros = await TotalDeCadastros();
  
  const total_generos = await TotaldeGeneros();
  let genero_nomes: any[] = []
  let genero_valores: any[] = []
  
  const total_conclusao_por_campus = await TotalConclusaoPorCampus();
  let total_conclusao_por_campus_nomes: any[] = []
  let total_conclusao_por_campus_valores: any[] = []
  
  const total_conclusao_por_curso = await TotalConclusaoPorCurso();
  let total_conclusao_por_curso_nomes: any[] = []
  let total_conclusao_por_curso_valores: any[] = []
  
  const avaliacao_curso = await AvaliacaoCurso();
  let avaliacao_curso_nomes: any[] = []
  let avaliacao_curso_valores: any[] = []
  
  const situacao_trabalho_estudos = await SituacaoTrabalhoEstudos();
  let situacao_trabalho_estudos_nomes: any[] = []
  let situacao_trabalho_estudos_valores: any[] = []
  
  const setor_atuacao = await SetorAtuacao();
  let setor_atuacao_nomes: any[] = []
  let setor_atuacao_valores: any[] = []
  
  const segmento_mercado_atuacao = await SegmentoMercadoAtuacao();
  let segmento_mercado_atuacao_nomes: any[] = []
  let segmento_mercado_atuacao_valores: any[] = []
  
  const atuacao_startup = await AtuaStartUp();
  let atuacao_startup_nomes: any[] = []
  let atuacao_startup_valores: any[] = []
  
  const rendimento_medio_mensal = await RendimentoMedioMensal();
  let rendimento_medio_mensal_nomes: any[] = []
  let rendimento_medio_mensal_valores: any[] = []
  
  const satisfacao_renda_atual = await SatisfacaoRendaAtual();
  let satisfacao_renda_atual_nomes: any[] = []
  let satisfacao_renda_atual_valores: any[] = []
  
  const trabalho_tipo_plataforma = await TrabalhoTipoPlataforma();
  let trabalho_tipo_plataforma_nomes: any[] = []
  let trabalho_tipo_plataforma_valores: any[] = []
  
  const tipo_contrato = await TipoContrato();
  let tipo_contrato_nomes: any[] = []
  let tipo_contrato_valores: any[] = []
  
  const modalidade_trabalho = await ModalidadeTrabalho();
  let modalidade_trabalho_nomes: any[] = []
  let modalidade_trabalho_valores: any[] = []
  
  const tempo_experiencia = await TempoExperiencia();
  let tempo_experiencia_nomes: any[] = []
  let tempo_experiencia_valores: any[] = []

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
            <div className="divider"></div>
          </section>
          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Por gênero">
            {total_generos.map((campo, index) => {
              genero_nomes.push(campo.genero)
              genero_valores.push(campo._count.genero)
              return (
                <Stats
                  key={index}
                  title={campo.genero}
                  value={campo._count.genero}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={genero_nomes} valores={genero_valores} title="Gráfico - Por Gênero"/>
          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Por Campus">
            {total_conclusao_por_campus.map((campo, index) => {
              total_conclusao_por_campus_nomes.push(campo.campus_conclusao_curso)
              total_conclusao_por_campus_valores.push(campo._count.campus_conclusao_curso)
              return (
                <Stats
                  key={index}
                  title={campo.campus_conclusao_curso?.replaceAll("_", " ")}
                  value={campo._count.campus_conclusao_curso}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={total_conclusao_por_campus_nomes} valores={total_conclusao_por_campus_valores} title="Gráfico - Campus de conclusão"/>
          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Quantidade de egressos por Curso">
            {total_conclusao_por_curso.map((campo, index) => {
              total_conclusao_por_curso_nomes.push(campo.curso_realizado)
              total_conclusao_por_curso_valores.push(campo._count.curso_realizado)
              return (
                <Stats
                  key={index}
                  title={campo.curso_realizado?.replaceAll("_", " ")}
                  value={campo._count.curso_realizado}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={total_conclusao_por_curso_nomes} valores={total_conclusao_por_curso_valores} title="Gráfico - Quantidade de egressos por Curso"/>
          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Avaliação Por Curso">
            {avaliacao_curso.map((campo, index) => {
              avaliacao_curso_nomes.push(campo.avaliacao_curso)
              avaliacao_curso_valores.push(campo._count.avaliacao_curso)
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
          <GeneroChart labels={avaliacao_curso_nomes} valores={avaliacao_curso_valores} title="Gráfico - Avaliação do curso"/>

          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Situação quanto a trabalho e estudos">
            {situacao_trabalho_estudos.map((campo, index) => {
              situacao_trabalho_estudos_nomes.push(campo.situacao_trabalho_estudo)
              situacao_trabalho_estudos_valores.push(campo._count.situacao_trabalho_estudo)
              return (
                <Stats
                  key={index}
                  title={campo.situacao_trabalho_estudo?.replaceAll("_", " ")}
                  value={campo._count.situacao_trabalho_estudo}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={situacao_trabalho_estudos_nomes} valores={situacao_trabalho_estudos_valores} title="Gráfico - Situação Trabalho e Estudos"/>
          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Setor de atuação">
            {setor_atuacao.map((campo, index) => {
              setor_atuacao_nomes.push(campo.setor_atuacao)
              setor_atuacao_valores.push(campo._count.setor_atuacao)
              return (
                <Stats
                  key={index}
                  title={campo.setor_atuacao?.replaceAll("_", " ")}
                  value={campo._count.setor_atuacao}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={setor_atuacao_nomes} valores={setor_atuacao_valores} title="Gráfico - Setor de atuação"/>

          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Segmento de Mercado Atuação">
            {segmento_mercado_atuacao.map((campo, index) => {
              segmento_mercado_atuacao_nomes.push(campo.segmento_mercado)
              segmento_mercado_atuacao_valores.push(campo._count.segmento_mercado)
              return (
                <Stats
                  key={index}
                  title={campo.segmento_mercado?.replaceAll("_", " ")}
                  value={campo._count.segmento_mercado}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={segmento_mercado_atuacao_nomes} valores={segmento_mercado_atuacao_valores} title="Gráfico - Segmento de Mercado Atuação"/>

          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Atuação em StartUp">
            {atuacao_startup.map((campo, index) => {
              atuacao_startup_nomes.push(campo.atua_startup)
              atuacao_startup_valores.push(campo._count.atua_startup)
              return (
                <Stats
                  key={index}
                  title={campo.atua_startup?.replaceAll("_", " ")}
                  value={campo._count.atua_startup}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={atuacao_startup_nomes} valores={atuacao_startup_valores} title="Gráfico - Atuação em StartUp"/>

          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Rendimento medio mensal">
            {rendimento_medio_mensal.map((campo, index) => {
              rendimento_medio_mensal_nomes.push(campo.rendimento_medio)
              rendimento_medio_mensal_valores.push(campo._count.rendimento_medio)
              return (
                <Stats
                  key={index}
                  title={campo.rendimento_medio?.replaceAll("_", " ")}
                  value={campo._count.rendimento_medio}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={rendimento_medio_mensal_nomes} valores={rendimento_medio_mensal_valores} title="Gráfico - Rendimento medio mensal"/>

          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Satisfação com a renda atual">
            {satisfacao_renda_atual.map((campo, index) => {
               satisfacao_renda_atual_nomes.push(campo.satisfacao_renda_atual)
               satisfacao_renda_atual_valores.push(campo._count.satisfacao_renda_atual)
              return (
                <Stats
                  key={index}
                  title={campo.satisfacao_renda_atual?.replaceAll("_", " ")}
                  value={campo._count.satisfacao_renda_atual}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={satisfacao_renda_atual_nomes} valores={satisfacao_renda_atual_valores} title="Gráfico - Satisfação com a renda atual"/>

          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Tipo de plataforma em que trabalha">
            {trabalho_tipo_plataforma.map((campo, index) => {
              trabalho_tipo_plataforma_nomes.push(campo.tipo_plataforma)
              trabalho_tipo_plataforma_valores.push(campo._count.tipo_plataforma)
              return (
                <Stats
                  key={index}
                  title={campo.tipo_plataforma?.replaceAll("_", " ")}
                  value={campo._count.tipo_plataforma}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={trabalho_tipo_plataforma_nomes} valores={trabalho_tipo_plataforma_valores} title="Gráfico - Tipo de plataforma em que trabalha"/>

          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Tipo de Contrato">
            {tipo_contrato.map((campo, index) => {
               tipo_contrato_nomes.push(campo.tipo_contrato)
               tipo_contrato_valores.push(campo._count.tipo_contrato)
              return (
                <Stats
                  key={index}
                  title={campo.tipo_contrato?.replaceAll("_", " ")}
                  value={campo._count.tipo_contrato}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={tipo_contrato_nomes} valores={tipo_contrato_valores} title="Gráfico - Tipo de Contrato"/>

          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Modalidade de Trabalho">
            {modalidade_trabalho.map((campo, index) => {
              modalidade_trabalho_nomes.push(campo.modalidade_trabalho)
              modalidade_trabalho_valores.push(campo._count.modalidade_trabalho)
              return (
                <Stats
                  key={index}
                  title={campo.modalidade_trabalho?.replaceAll("_", " ")}
                  value={campo._count.modalidade_trabalho}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={modalidade_trabalho_nomes} valores={modalidade_trabalho_valores} title="Gráfico - Modalidade de Trabalho"/>

          <div className="divider"></div>
          {/*  */}
          <StatsContainer title="Tempo de experiência">
            {tempo_experiencia.map((campo, index) => {
              tempo_experiencia_nomes.push(campo.tempo_exp)
              tempo_experiencia_valores.push(campo._count.tempo_exp)
              return (
                <Stats
                  key={index}
                  title={campo.tempo_exp?.replaceAll("_", " ")}
                  value={campo._count.tempo_exp}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart labels={tempo_experiencia_nomes} valores={tempo_experiencia_valores} title="Gráfico - Tempo de experiência"/>

          <div className="divider"></div>
        </div>
      </div>
    </>
  );
}
