import GeneroChart from "../graficos/GeneroChart";
import { TotalConclusaoPorCurso } from "../utils/TotalConclusaoPorCurso";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";

export default async function RelTotalConclusaoPorCurso() {
  const total_conclusao_por_curso = await TotalConclusaoPorCurso();
  let total_conclusao_por_curso_nomes: any[] = [];
  let total_conclusao_por_curso_valores: any[] = [];
  return (
    <>
      <StatsContainer title="Quantidade de egressos por Curso">
        {total_conclusao_por_curso.map((campo, index) => {
          total_conclusao_por_curso_nomes.push(campo.curso_realizado);
          total_conclusao_por_curso_valores.push(campo._count.curso_realizado);
          return (
            <Stats
              key={index}
              title={campo.curso_realizado?.replaceAll("_", " ")}
              value={campo._count.curso_realizado}
            />
          );
        })}
      </StatsContainer>
      <GeneroChart
        labels={total_conclusao_por_curso_nomes}
        valores={total_conclusao_por_curso_valores}
        title="Gráfico - Quantidade de egressos por Curso"
      />
    </>
  );
}
