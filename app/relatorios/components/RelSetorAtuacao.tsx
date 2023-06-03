import GeneroChart from "../graficos/GeneroChart";
import { SetorAtuacao } from "../utils/SetorAtuacao";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";

export default async function RelSetorAtuacao() {
  const setor_atuacao = await SetorAtuacao();
  let setor_atuacao_nomes: any[] = [];
  let setor_atuacao_valores: any[] = [];
  return (
    <div>
      <StatsContainer title="Setor de atuação">
        {setor_atuacao.map((campo, index) => {
          setor_atuacao_nomes.push(campo.setor_atuacao);
          setor_atuacao_valores.push(campo._count.setor_atuacao);
          return (
            <Stats
              key={index}
              title={campo.setor_atuacao?.replaceAll("_", " ")}
              value={campo._count.setor_atuacao}
            />
          );
        })}
      </StatsContainer>
      <GeneroChart
        labels={setor_atuacao_nomes}
        valores={setor_atuacao_valores}
        title="Gráfico - Setor de atuação"
      />
    </div>
  );
}
