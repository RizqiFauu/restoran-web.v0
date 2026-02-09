import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const menus = await prisma.menu.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(menus)
}

export async function POST(req: Request) {
  const { name, price, categoryId, imageUrl } = await req.json()

  if (!name || !price || !categoryId) {
    return NextResponse.json(
      { error: "Invalid payload" },
      { status: 400 }
    )
  }

  const menu = await prisma.menu.create({
    data: {
      name,
      price: Number(price),
      categoryId: Number(categoryId),
      ...(imageUrl && { imageUrl }),
    },
  })

  return NextResponse.json(menu)
}
