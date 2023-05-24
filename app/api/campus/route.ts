import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const resp = await prisma.campus.findMany();
    return new Response(JSON.stringify(resp), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: `${error}` }), { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name }: Partial<Campus> = await request.json();

    if (!name)
      return new Response(
        JSON.stringify({ message: "A propriedade [name] não foi encontrada." }),
        { status: 400 }
      );

    const resp = await prisma.campus.create({
      data: {
        name: name,
      },
    });
    return new Response(
      JSON.stringify({ message: `Campus criado com o id ${resp.id}` }),
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
    const id = (await searchParams.get("id")) || "";

    if (!id)
      return new Response(
        JSON.stringify({ message: "A propriedade [id] não foi encontrada" }),
        { status: 400 }
      );

    await prisma.campus.delete({
      where: {
        id,
      },
    });

    return new Response(JSON.stringify({ message: "Campus deletado!" }), {
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
