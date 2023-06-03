import GeneroChart from "../graficos/GeneroChart";
import { SegmentoMercadoAtuacao } from "../utils/SegmentoMercadoAtuacao";
import Stats from "./Stats";
import StatsContainer from "./StatsContainer";

export default async function RelSegmentoMercadoAtuacao() {
  const segmento_mercado_atuacao = await SegmentoMercadoAtuacao();
  let segmento_mercado_atuacao_nomes: any[] = [];
  let segmento_mercado_atuacao_valores: any[] = [];
  return (
    <div>
      <StatsContainer title="Segmento de Mercado Atuação">
        {segmento_mercado_atuacao.map((campo, index) => {
          segmento_mercado_atuacao_nomes.push(campo.segmento_mercado);
          segmento_mercado_atuacao_valores.push(campo._count.segmento_mercado);
          return (
            <Stats
              key={index}
              title={campo.segmento_mercado?.replaceAll("_", " ")}
              value={campo._count.segmento_mercado}
            />
          );
        })}
      </StatsContainer>
      <GeneroChart
        labels={segmento_mercado_atuacao_nomes}
        valores={segmento_mercado_atuacao_valores}
        title="Gráfico - Segmento de Mercado Atuação"
      />
    </div>
  );
}
