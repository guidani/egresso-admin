import BreadcumbsRelatorios from "./components/BreadcumbsRelatorios";
import RelAtuacaoStartup from "./components/RelAtuacaoStartup";
import RelAvaliacaoCurso from "./components/RelAvaliacaoCurso";
import RelModalidadeTrabalho from "./components/RelModalidadeTrabalho";
import RelRendimentoMedioMensal from "./components/RelRendimentoMedioMensal";
import RelSatisfacaoRendaAtual from "./components/RelSatisfacaoRendaAtual";
import RelSegmentoMercadoAtuacao from "./components/RelSegmentoMercadoAtuacao";
import RelSetorAtuacao from "./components/RelSetorAtuacao";
import RelSituacaoTrabalhoEstudos from "./components/RelSituacaoTrabalhoEstudos";
import RelTempoExperiencia from "./components/RelTempoExperiencia";
import RelTipoContrato from "./components/RelTipoContrato";
import RelTotalCadastros from "./components/RelTotalCadastros";
import RelTotalConclusaoPorCampus from "./components/RelTotalConclusaoPorCampus";
import RelTotalConclusaoPorCurso from "./components/RelTotalConclusaoPorCurso";
import RelTotalGeneros from "./components/RelTotalGeneros";
import RelTrabalhoTipoPlataforma from "./components/RelTrabalhoTipoPlataforma";

export const revalidate = 60;

export default async function Relatorios() {
  return (
    <div className="flex min-h-screen flex-col px-2">
      <BreadcumbsRelatorios />
      <h1 className="mt-4 mb-2 text-2xl">Relatórios</h1>
      <hr />
      <div className="grid">
        <section>
          <h2>Cadastros</h2>
          {/* @ts-ignore */}
          <RelTotalCadastros />
        </section>
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelTotalGeneros />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelTotalConclusaoPorCampus />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelTotalConclusaoPorCurso />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelAvaliacaoCurso />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelSituacaoTrabalhoEstudos />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelSetorAtuacao />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelSegmentoMercadoAtuacao />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelAtuacaoStartup />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelRendimentoMedioMensal />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelSatisfacaoRendaAtual />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelTrabalhoTipoPlataforma />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelTipoContrato />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelModalidadeTrabalho />
        <div className="divider"></div>
        {/* @ts-ignore */}
        <RelTempoExperiencia />
        <div className="divider"></div>
      </div>
    </div>
  );
}
