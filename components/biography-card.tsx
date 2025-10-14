import React from "react"

export default function BiographyCard({
  image = "/images/carousel.png",
  title = "El Padre Diego Fares SJ",
  children
}: {
  image?: string
  title?: string
  children: React.ReactNode
}) {
  return (
    <section className="px-4 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-4 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-1">
              <div className="w-full rounded-lg overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
                <img src={image} alt={title} className="w-full h-auto object-cover" />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="title-playfair-medium text-slate-700 text-2xl lg:text-3xl mb-4">{title}</h2>
              <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
