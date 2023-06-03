import GeneroChart from "../graficos/GeneroChart";
import { TrabalhoTipoPlataforma } from "../utils/TrabalhoTipoPlataforma";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";
export default async function RelTrabalhoTipoPlataforma() {
  const trabalho_tipo_plataforma = await TrabalhoTipoPlataforma();
  let trabalho_tipo_plataforma_nomes: any[] = [];
  let trabalho_tipo_plataforma_valores: any[] = [];
  return (
    <div>
      <StatsContainer title="Tipo de plataforma em que trabalha">
        {trabalho_tipo_plataforma.map((campo, index) => {
          trabalho_tipo_plataforma_nomes.push(campo.tipo_plataforma);
          trabalho_tipo_plataforma_valores.push(campo._count.tipo_plataforma);
          return (
            <Stats
              key={index}
              title={campo.tipo_plataforma?.replaceAll("_", " ")}
              value={campo._count.tipo_plataforma}
            />
          );
        })}
      </StatsContainer>
      <GeneroChart
        labels={trabalho_tipo_plataforma_nomes}
        valores={trabalho_tipo_plataforma_valores}
        title="Gráfico - Tipo de plataforma em que trabalha"
      />
    </div>
  );
}
