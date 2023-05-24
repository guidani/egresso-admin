import prisma from "@/lib/prisma";

export async function GET(response: Response) {
  try {
    const resp = await prisma.curso.findMany();

    return new Response(JSON.stringify(resp), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: `${error}` }), { status: 500 });
  }
}

export async function POST(request: Request, response: Response) {
  try {
    const { name }: Partial<Curso> = await request.json();
    if (!name)
      return new Response(
        JSON.stringify({ message: "A propriedade [name] não foi encontrada." }),
        { status: 400 }
      );

    const resp = await prisma.curso.create({
      data: {
        name: name,
      },
    });
    return new Response(
      JSON.stringify({ message: `Curso criado com o id ${resp.id}` }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Ocorreu um erro inesperado! Tente novamente.",
      }),
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = await searchParams.get("id") || "";

    if (!id)
      return new Response(
        JSON.stringify({ message: "A propriedade [id] não foi encontrada" }),
        { status: 400 }
      );

    await prisma.curso.delete({
      where: {
        id,
      },
    });

    return new Response(JSON.stringify({ message: "Curso deletado!" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Ocorreu um erro inesperado! Tente novamente.",
      }),
      { status: 500 }
    );
  }
}
