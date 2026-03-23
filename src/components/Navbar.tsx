'use client'

import Image from 'next/image'
import { ShoppingCart, ChevronRight } from 'lucide-react'
import { useCart, formatPrice } from '@/contexts/CartContext'

export default function Navbar() {
  const { items, total, setIsOpen, isOpen } = useCart()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.88)] backdrop-blur-xl border-b border-black/6">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image src="/vizuara-logo.png" alt="Vizuara" width={28} height={28} className="rounded-lg"/>
          <span className="font-semibold text-sm text-[#1d1d1f] tracking-tight">Vizuara AI Labs</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-[13px] text-[#6e6e73]">
          {['#curriculum', '#speakers', '#hardware', '#enroll', '#instructor'].map((href, i) => (
            <a key={href} href={href} className="hover:text-[#1d1d1f] transition-colors">
              {['Curriculum','Speakers','Hardware','Pricing','Instructor'][i]}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2.5">
          {items.size > 0 && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/8 transition-colors text-[13px] text-[#1d1d1f] font-medium"
            >
              <ShoppingCart size={14}/>
              <span style={{ background: 'var(--ai-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 }}>{formatPrice(total)}</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 text-white rounded-full text-[10px] flex items-center justify-center font-bold" style={{ background: 'var(--ai-gradient-diag)' }}>
                {items.size}
              </span>
            </button>
          )}
          <a href="#enroll" className="btn-primary text-[13px] py-1.5 px-4">
            Enroll <ChevronRight size={13}/>
          </a>
        </div>
      </div>
    </nav>
  )
}
