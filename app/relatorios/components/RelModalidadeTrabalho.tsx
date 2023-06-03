import React from 'react'
import { ModalidadeTrabalho } from '../utils/ModalidadeTrabalho';
import StatsContainer from './StatsContainer';
import GeneroChart from '../graficos/GeneroChart';
import Stats from './Stats';

export default async function RelModalidadeTrabalho() {
  const modalidade_trabalho = await ModalidadeTrabalho();
  let modalidade_trabalho_nomes: any[] = [];
  let modalidade_trabalho_valores: any[] = [];
  return (
    <div><StatsContainer title="Modalidade de Trabalho">
    {modalidade_trabalho.map((campo, index) => {
      modalidade_trabalho_nomes.push(campo.modalidade_trabalho);
      modalidade_trabalho_valores.push(
        campo._count.modalidade_trabalho
      );
      return (
        <Stats
          key={index}
          title={campo.modalidade_trabalho?.replaceAll("_", " ")}
          value={campo._count.modalidade_trabalho}
        />
      );
    })}
  </StatsContainer>
  <GeneroChart
    labels={modalidade_trabalho_nomes}
    valores={modalidade_trabalho_valores}
    title="Gráfico - Modalidade de Trabalho"
  /></div>
  )
}
