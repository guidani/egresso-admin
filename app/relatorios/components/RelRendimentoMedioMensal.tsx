import GeneroChart from "../graficos/GeneroChart";
import { RendimentoMedioMensal } from "../utils/RendimentoMedioMensal";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";
export default async function RelRendimentoMedioMensal() {
  const rendimento_medio_mensal = await RendimentoMedioMensal();
  let rendimento_medio_mensal_nomes: any[] = [];
  let rendimento_medio_mensal_valores: any[] = [];
  return (
    <div>
      <StatsContainer title="Rendimento medio mensal">
        {rendimento_medio_mensal.map((campo, index) => {
          rendimento_medio_mensal_nomes.push(campo.rendimento_medio);
          rendimento_medio_mensal_valores.push(campo._count.rendimento_medio);
          return (
            <Stats
              key={index}
              title={campo.rendimento_medio?.replaceAll("_", " ")}
              value={campo._count.rendimento_medio}
            />
          );
        })}
      </StatsContainer>
      <GeneroChart
        labels={rendimento_medio_mensal_nomes}
        valores={rendimento_medio_mensal_valores}
        title="Gráfico - Rendimento medio mensal"
      />
    </div>
  );
}
