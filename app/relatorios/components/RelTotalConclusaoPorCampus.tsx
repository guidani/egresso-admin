import GeneroChart from "../graficos/GeneroChart";
import { TotalConclusaoPorCampus } from "../utils/TotalConclusaoPorCampus";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";

export default async function RelTotalConclusaoPorCampus() {
  const total_conclusao_por_campus = await TotalConclusaoPorCampus();
  let total_conclusao_por_campus_nomes: any[] = [];
  let total_conclusao_por_campus_valores: any[] = [];
  return (
    <>
    <StatsContainer title="Por Campus">
            {total_conclusao_por_campus.map((campo, index) => {
              total_conclusao_por_campus_nomes.push(
                campo.campus_conclusao_curso
              );
              total_conclusao_por_campus_valores.push(
                campo._count.campus_conclusao_curso
              );
              return (
                <Stats
                  key={index}
                  title={campo.campus_conclusao_curso?.replaceAll("_", " ")}
                  value={campo._count.campus_conclusao_curso}
                />
              );
            })}
          </StatsContainer>
          <GeneroChart
            labels={total_conclusao_por_campus_nomes}
            valores={total_conclusao_por_campus_valores}
            title="Gráfico - Campus de conclusão"
          />
    </>
  )
}