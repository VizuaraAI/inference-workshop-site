'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { CompanyLogo } from './CompanyLogos'

const companies = ['Anthropic', 'NVIDIA', 'Microsoft', 'AWS', 'Apple', 'AnyScale', 'Red Hat', 'Mastercard']

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#f5f5f7] flex flex-col justify-center overflow-hidden pt-16">
      {/* Ambient gradient orb */}
      <div className="hero-orb" style={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div
          data-reveal data-delay="1"
          className="inline-flex items-center gap-2 bg-white text-[#6e6e73] px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-[#d2d2d7] shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--ai-pink)' }} />
          Applications Open · April 20, 2026
        </div>

        {/* Headline */}
        <h1 className="headline-xl mb-6" style={{ color: '#1d1d1f' }}>
          <span className="hero-word">Master</span>
          <span className="hero-word">LLM</span>
          <span className="hero-word text-gradient" aria-label="Inference">
            {'Inference'.split('').map((letter, i) => (
              <span
                key={i}
                className="token-letter"
                style={{ animationDelay: `${0.6 + i * 0.09}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
          <span className="hero-word">Engineering.</span>
        </h1>

        {/* Subtitle */}
        <p
          data-reveal data-delay="2"
          className="subhead max-w-2xl mx-auto mb-10 text-lg"
        >
          A 4-week intensive from transformer internals and KV cache
          to production deployment on edge devices. Taught by Dr. Raj Dandekar (MIT PhD)
          with 8 industry experts from the world's top AI companies.
        </p>

        {/* Company strip — inline under subtitle */}
        <div data-reveal data-delay="2" className="flex items-center justify-center gap-3 flex-wrap mb-8">
          {companies.map(c => (
            <div key={c} className="flex items-center">
              <CompanyLogo company={c} height={16} />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div data-reveal data-delay="3" className="flex items-center justify-center gap-3 mb-16 flex-wrap">
          <a href="#enroll" className="btn-primary">
            See Plans <ChevronRight size={15} />
          </a>
          <a href="#curriculum" className="btn-secondary">
            View Curriculum
          </a>
        </div>

        {/* Stats row */}
        <div
          data-reveal data-delay="4"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16"
        >
          {[
            { n: '200+', label: 'Engineers' },
            { n: '15', label: 'Core Lectures' },
            { n: '8', label: 'Guest Lecturers' },
            { n: '4', label: 'Hardware Devices' },
          ].map(s => (
            <div key={s.label} className="bg-white border border-[#e8e8ed] rounded-2xl py-4 px-3 shadow-sm">
              <div className="text-3xl font-bold mb-0.5 text-gradient" style={{ letterSpacing: '-0.03em' }}>{s.n}</div>
              <div className="text-sm text-[#6e6e73]">{s.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#b0b0b8]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#b0b0b8] to-transparent" />
      </div>
    </section>
  )
}
