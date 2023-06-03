import GeneroChart from "../graficos/GeneroChart";
import { TotaldeGeneros } from "../utils/TotalDeGeneros";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";

export default async function RelTotalGeneros() {
  const total_generos = await TotaldeGeneros();
  let genero_nomes: any[] = [];
  let genero_valores: any[] = [];
  return (
    <>
      <StatsContainer title="Por gênero">
        {total_generos.map((campo, index) => {
          genero_nomes.push(campo.genero);
          genero_valores.push(campo._count.genero);
          return (
            <Stats
              key={index}
              title={campo.genero}
              value={campo._count.genero}
            />
          );
        })}
      </StatsContainer>
      <GeneroChart
        labels={genero_nomes}
        valores={genero_valores}
        title="Gráfico - Por Gênero"
      />
    </>
  );
}
