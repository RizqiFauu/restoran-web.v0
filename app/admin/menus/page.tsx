"use client"

import { useEffect, useState } from "react"

export default function MenusPage() {
  const [menus, setMenus] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [form, setForm] = useState({
    name: "",
    price: "",
    categoryId: "",
  })

  const load = async () => {
    const [m, c] = await Promise.all([
      fetch("/api/menus").then((r) => r.json()),
      fetch("/api/categories").then((r) => r.json()),
    ])
    setMenus(m)
    setCategories(c)
  }

  useEffect(() => {
    load()
  }, [])

  const submit = async () => {
    await fetch("/api/menus", {
      method: "POST",
      body: JSON.stringify(form),
    })
    setForm({ name: "", price: "", categoryId: "" })
    load()
  }

  const remove = async (id: number) => {
    await fetch(`/api/menus/${id}`, { method: "DELETE" })
    load()
  }

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-xl font-bold mb-4">Menu</h1>

      <div className="space-y-2 mb-6">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border px-2 py-1 w-full"
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border px-2 py-1 w-full"
        />
        <select
          value={form.categoryId}
          onChange={(e) =>
            setForm({ ...form, categoryId: e.target.value })
          }
          className="border px-2 py-1 w-full"
        >
          <option value="">Select category</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <button onClick={submit} className="border px-3 py-1">
          Add Menu
        </button>
      </div>

      <ul className="space-y-2">
        {menus.map((m) => (
          <li
            key={m.id}
            className="flex justify-between border px-3 py-2"
          >
            <div>
              {m.name} — Rp{m.price}
              <div className="text-xs text-gray-500">
                {m.category.name}
              </div>
            </div>
            <button
              onClick={() => remove(m.id)}
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
