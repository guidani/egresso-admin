import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const resp = await prisma.curso.findMany();
    console.log("🚀 ~ file: route.ts:8 ~ GET ~ resp:", resp)
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
    return NextResponse.json({
      message: `Ocorreu um erro inesperado! Tente novamente.`,
    });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") || "";

    if (!id) return NextResponse.json({ message: "ID necessário" });

    await prisma.curso.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ message: "Curso deletado!" });
  } catch (error) {
    return NextResponse.json({
      message: `Ocorreu um erro inesperado! Tente novamente. ${error}`,
    });
  }
}
