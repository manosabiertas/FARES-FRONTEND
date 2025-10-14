"use client"

import React, { useMemo, useState } from "react"

type GalleryImage = { src: string; alt?: string }
type Category = { name: string; images: GalleryImage[] }

export default function BiografiaGallery({ categories }: { categories: Category[] }) {
  const [active, setActive] = useState<string>("All")

  const flat = useMemo(() => {
    return categories.flatMap((c) =>
      c.images.map((img) => ({ ...img, category: c.name }))
    )
  }, [categories])

  const displayed = active === "All" ? flat : flat.filter((i) => i.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <button
          onClick={() => setActive("All")}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            active === "All" ? "bg-slate-700 text-white" : "bg-white border"
          }`}
        >
          Todas
        </button>

        {categories.map((c) => (
          <button
            key={c.name}
            onClick={() => setActive(c.name)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              active === c.name ? "bg-slate-700 text-white" : "bg-white border"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayed.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <img src={img.src} alt={img.alt ?? ""} loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}