"use client"

import { useEffect, useState } from "react"

type Category = {
  id: string
  name: string
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [name, setName] = useState("")

  const load = async () => {
    const res = await fetch("/api/categories")
    setCategories(await res.json())
  }

  useEffect(() => {
    load()
  }, [])

  const add = async () => {
    if (!name) return

    await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify({ name }),
    })

    setName("")
    load()
  }

  const remove = async (id: string) => {
    await fetch(`/api/categories/${id}`, {
      method: "DELETE",
    })
    load()
  }

  return (
    <div className="p-6 max-w-md">
      <h1 className="text-xl font-bold mb-4">Category</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New category"
          className="border px-2 py-1 flex-1"
        />
        <button onClick={add} className="border px-3">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {categories.map((c) => (
          <li
            key={c.id}
            className="flex justify-between border px-3 py-2"
          >
            {c.name}
            <button
              onClick={() => remove(c.id)}
              className="text-red-500"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
