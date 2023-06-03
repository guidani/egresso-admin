import GeneroChart from "../graficos/GeneroChart";
import { SatisfacaoRendaAtual } from "../utils/SatisfacaoRendaAtual";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";

export default async function RelSatisfacaoRendaAtual() {
  const satisfacao_renda_atual = await SatisfacaoRendaAtual();
  let satisfacao_renda_atual_nomes: any[] = [];
  let satisfacao_renda_atual_valores: any[] = [];
  return (
    <div>
      <StatsContainer title="Satisfação com a renda atual">
        {satisfacao_renda_atual.map((campo, index) => {
          satisfacao_renda_atual_nomes.push(campo.satisfacao_renda_atual);
          satisfacao_renda_atual_valores.push(
            campo._count.satisfacao_renda_atual
          );
          return (
            <Stats
              key={index}
              title={campo.satisfacao_renda_atual?.replaceAll("_", " ")}
              value={campo._count.satisfacao_renda_atual}
            />
          );
        })}
      </StatsContainer>
      <GeneroChart
        labels={satisfacao_renda_atual_nomes}
        valores={satisfacao_renda_atual_valores}
        title="Gráfico - Satisfação com a renda atual"
      />
    </div>
  );
}
