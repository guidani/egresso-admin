"use client";

import { useRouter } from "next/navigation";

export default function DelBtn({ id }: { id: string }) {
  const router = useRouter();
  async function del_curso(curso_id: string): Promise<any> {
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/api/curso` + `?id=${curso_id}`,
        {
          method: "DELETE",
        }
      );

      if (resp.ok) {
        if (window.confirm("Curso deletado!")) {
          router.refresh();
        } else {
          router.refresh();
        }
        return JSON.stringify(resp.json());
      }
    } catch (error) {
      return JSON.stringify({
        msg: "Ocorreu um erro inesperado. Tente novamente.",
      });
    }
  }

  return <button onClick={() => del_curso(id)}>DELETAR</button>;
}
