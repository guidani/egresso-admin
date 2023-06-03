import GeneroChart from "../graficos/GeneroChart";
import { TipoContrato } from "../utils/TipoContrato";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";
export default async function RelTipoContrato() {
  const tipo_contrato = await TipoContrato();
  let tipo_contrato_nomes: any[] = [];
  let tipo_contrato_valores: any[] = [];
  return (
    <div>
      <StatsContainer title="Tipo de Contrato">
        {tipo_contrato.map((campo, index) => {
          tipo_contrato_nomes.push(campo.tipo_contrato);
          tipo_contrato_valores.push(campo._count.tipo_contrato);
          return (
            <Stats
              key={index}
              title={campo.tipo_contrato?.replaceAll("_", " ")}
              value={campo._count.tipo_contrato}
            />
          );
        })}
      </StatsContainer>
      <GeneroChart
        labels={tipo_contrato_nomes}
        valores={tipo_contrato_valores}
        title="Gráfico - Tipo de Contrato"
      />
    </div>
  );
}
