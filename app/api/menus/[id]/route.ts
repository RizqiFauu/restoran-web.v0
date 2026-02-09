import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { name, price, categoryId, imageUrl } = await req.json()

  const menu = await prisma.menu.update({
    where: { id: Number(params.id) },
    data: {
      name,
      price: Number(price),
      categoryId: Number(categoryId),
    },
  })

  return NextResponse.json(menu)
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.menu.delete({
    where: { id: Number(params.id) },
  })

  return NextResponse.json({ success: true })
}
