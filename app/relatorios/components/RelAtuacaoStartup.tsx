import GeneroChart from "../graficos/GeneroChart";
import { AtuaStartUp } from "../utils/AtuaStartUp";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";
export default async function RelAtuacaoStartup() {
  const atuacao_startup = await AtuaStartUp();
  let atuacao_startup_nomes: any[] = [];
  let atuacao_startup_valores: any[] = [];
  return (
    <div>
      <StatsContainer title="Atuação em StartUp">
        {atuacao_startup.map((campo, index) => {
          atuacao_startup_nomes.push(campo.atua_startup);
          atuacao_startup_valores.push(campo._count.atua_startup);
          return (
            <Stats
              key={index}
              title={campo.atua_startup?.replaceAll("_", " ")}
              value={campo._count.atua_startup}
            />
          );
        })}
      </StatsContainer>
      <GeneroChart
        labels={atuacao_startup_nomes}
        valores={atuacao_startup_valores}
        title="Gráfico - Atuação em StartUp"
      />
    </div>
  );
}
