import GeneroChart from "../graficos/GeneroChart";
import { AvaliacaoCurso } from "../utils/AvaliacaoCurso";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";

export default async function RelAvaliacaoCurso() {
  const avaliacao_curso = await AvaliacaoCurso();
  let avaliacao_curso_nomes: any[] = [];
  let avaliacao_curso_valores: any[] = [];
  return (
    <>
      <StatsContainer title="Avaliação Por Curso">
        {avaliacao_curso.map((campo, index) => {
          avaliacao_curso_nomes.push(campo.avaliacao_curso);
          avaliacao_curso_valores.push(campo._count.avaliacao_curso);
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
      <GeneroChart
        labels={avaliacao_curso_nomes}
        valores={avaliacao_curso_valores}
        title="Gráfico - Avaliação do curso"
      />
    </>
  );
}
