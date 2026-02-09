import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { name } = await req.json()

  const category = await prisma.category.update({
    where: { id: Number(params.id) },
    data: { name },
  })

  return NextResponse.json(category)
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.category.delete({
    where: { id: Number(params.id) },
  })

  return NextResponse.json({ success: true })
}
