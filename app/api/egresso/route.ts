import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const resp = await prisma.egressoForm.findMany();
    const jsonResponse = { data: resp };
    return new Response(JSON.stringify(jsonResponse), {
      status: 200,
      statusText: "ok",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: `${error}` }), { status: 500 });
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

    await prisma.egressoForm.delete({
      where: {
        id,
      },
    });

    return new Response(JSON.stringify({ message: "Egresso deletado!" }), {
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
