"use client";
type Props = {
  id: String;
  name: String;
  email: String;
  createdAt: Date;
  updatedAt: Date;
};

export default function Comp({dados}: {dados: Props[]}) {
  return (
    <select name="" id="">
      <option hidden disabled selected>Selecione uma opção</option>
      {dados.map((dt) => {
        return (
          <option value={dt.name} key={dt.id}>
            {dt.name}
          </option>
        );
      })}
    </select>
  );
}
