import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-6 lg:py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Link href="/aviso-legal" className="text-xs lg:text-sm hover:text-gray-300 transition-colors">
          Aviso Legal
        </Link>
      </div>
    </footer>
  )
}
