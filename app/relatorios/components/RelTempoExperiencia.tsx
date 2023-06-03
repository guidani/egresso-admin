import React from 'react'
import { TempoExperiencia } from '../utils/TempoExperiencia';
import StatsContainer from './StatsContainer';
import Stats from './Stats';
import GeneroChart from '../graficos/GeneroChart';

export default async function RelTempoExperiencia() {
  
  const tempo_experiencia = await TempoExperiencia();
  let tempo_experiencia_nomes: any[] = [];
  let tempo_experiencia_valores: any[] = [];
  return (
    <div><StatsContainer title="Tempo de experiência">
    {tempo_experiencia.map((campo, index) => {
      tempo_experiencia_nomes.push(campo.tempo_exp);
      tempo_experiencia_valores.push(campo._count.tempo_exp);
      return (
        <Stats
          key={index}
          title={campo.tempo_exp?.replaceAll("_", " ")}
          value={campo._count.tempo_exp}
        />
      );
    })}
  </StatsContainer>
  <GeneroChart
    labels={tempo_experiencia_nomes}
    valores={tempo_experiencia_valores}
    title="Gráfico - Tempo de experiência"
  /></div>
  )
}
