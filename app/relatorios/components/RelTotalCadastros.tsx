import { TotalDeCadastros } from "../utils/TotalDeCadastros";
import Stats from "./Stats";

export default async function RelTotalCadastros() {
  const total_de_cadastros = await TotalDeCadastros();
  return (
    <>
    <Stats title={"Total de cadastros"} value={total_de_cadastros} />
    </>
  )
}