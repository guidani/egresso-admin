import GeneroChart from "../graficos/GeneroChart";
import { SituacaoTrabalhoEstudos } from "../utils/SituacaoTrabalhoEstudos";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";

export default async function RelSituacaoTrabalhoEstudos() {
  const situacao_trabalho_estudos = await SituacaoTrabalhoEstudos();
  let situacao_trabalho_estudos_nomes: any[] = [];
  let situacao_trabalho_estudos_valores: any[] = [];
  return (
    <div>
      <StatsContainer title="Situação quanto a trabalho e estudos">
        {situacao_trabalho_estudos.map((campo, index) => {
          situacao_trabalho_estudos_nomes.push(campo.situacao_trabalho_estudo);
          situacao_trabalho_estudos_valores.push(
            campo._count.situacao_trabalho_estudo
          );
          return (
            <Stats
              key={index}
              title={campo.situacao_trabalho_estudo?.replaceAll("_", " ")}
              value={campo._count.situacao_trabalho_estudo}
            />
          );
        })}
      </StatsContainer>
      <GeneroChart
        labels={situacao_trabalho_estudos_nomes}
        valores={situacao_trabalho_estudos_valores}
        title="Gráfico - Situação Trabalho e Estudos"
      />
    </div>
  );
}
