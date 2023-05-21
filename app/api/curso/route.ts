import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const resp = await prisma.curso.findMany()
    return NextResponse.json(resp);
  } catch (error) {
    return NextResponse.json({ msg: "Error" });
  }
}

export async function POST(request: Request) {
  try {
    const { name }: Partial<Curso> = await request.json();
    if (!name) return NextResponse.json({ message: "Nome necessário" });

    const resp = await prisma.curso.create({
      data: {
        name: name,
      },
    });
    return NextResponse.json({ message: `Curso criado com o id ${resp.id}` });
  } catch (error) {
    console.error(error);
  }
}

export async function DELETE(request: Request) {
  const { id }: Partial<Curso> = await request.json();

  if (!id) return NextResponse.json({ message: "ID necessário" });

  await prisma.curso.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ message: "Curso deletado" });
}
