"use client"

import React, { useMemo, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

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
          <Dialog key={`${img.src}-${idx}`}>
            <DialogTrigger asChild>
              <div
                className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              >
                <img src={img.src} alt={img.alt ?? ""} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-0 [&_button[data-slot='dialog-close']]:text-white [&_button[data-slot='dialog-close']]:hover:text-white/80">
              <div className="relative w-full h-[90vh] flex items-center justify-center p-4">
                <img
                  src={img.src}
                  alt={img.alt ?? ""}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}