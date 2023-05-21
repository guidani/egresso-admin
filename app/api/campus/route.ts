import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const resp = await prisma.campus.findMany();
    return NextResponse.json(resp);
  } catch (error) {
    return NextResponse.json({ msg: "Error" });
  }
}

export async function POST(request: Request) {
  try {
    const { name }: Partial<Campus> = await request.json();
    console.log("🚀 ~ file: route.ts:16 ~ POST ~ name:", name)
    if (!name) return NextResponse.json({ message: "Nome necessário" });

    const resp = await prisma.campus.create({
      data: {
        name: name,
      },
    });
    return NextResponse.json({ message: `campus criado com o id ${resp.id}` });
  } catch (error) {
    return NextResponse.json({ message: `Ocorreu um erro inesperado! Tente novamente.` });
  }
}

export async function DELETE(request: Request) {
  const { id }: Partial<Campus> = await request.json();

  if (!id) return NextResponse.json({ message: "ID necessário" });

  await prisma.campus.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ message: "campus deletado" });
}
