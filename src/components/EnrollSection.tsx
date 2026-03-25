'use client'

import { useState } from 'react'
import { Check, ChevronDown, ChevronRight, Star, Clock, Flame } from 'lucide-react'
import { useCart, CART_ITEMS, formatPrice, CartItemId } from '@/contexts/CartContext'
import { CompanyLogo } from './CompanyLogos'
import { useEarlyBird } from '@/hooks/useEarlyBird'

// ── Expandable detail panels ──

function SpeakersDetail() {
  const speakers = [
    { name: 'Aditya Shrivastava', co: 'Anthropic', col: '#C2461E', topic: 'LLM Inference at Anthropic', career: true },
    { name: 'Shreyans Dhankhar', co: 'NVIDIA', col: '#76B900', topic: 'Disaggregated Inference', career: true },
    { name: 'Harshul Jain', co: 'Audible (Amazon)', col: '#FF9900', topic: 'Framework-Agnostic LLM Serving' },
    { name: 'Suman Debnath', co: 'AnyScale', col: '#FF6B35', topic: 'Distributed Training with Ray', confirmed: true },
    { name: 'Seiji Eicher', co: 'AnyScale', col: '#FF6B35', topic: 'Inference at Scale: Ray Serve + vLLM', confirmed: true },
    { name: 'Aayush Saini', co: 'Red Hat AI', col: '#EE0000', topic: 'Next-Gen Multimodal with Omni-VLLM', confirmed: true },
    { name: 'Suyash Harlalka', co: 'Microsoft', col: '#00A4EF', topic: 'Efficient Inference with SLMs', career: true },
    { name: 'Shubham Panchal', co: 'Mastercard', col: '#EB001B', topic: 'On-Device Android Deployment', confirmed: true },
    { name: 'Yash Dixit', co: 'Apple', col: '#555555', topic: 'How Inference Is Done on LLMs at Apple', career: true, confirmed: true },
  ]
  return (
    <div className="mt-4 space-y-2">
      {speakers.map(s => (
        <div key={s.name} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f5f5f7]">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-semibold text-[#1d1d1f]">{s.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <CompanyLogo company={s.co} height={14} />
              <span className="text-[10px] text-[#86868b]">·</span>
              <p className="text-xs text-[#86868b] truncate">{s.topic}</p>
            </div>
          </div>
          <div className="flex gap-1.5 flex-shrink-0">
            {s.career && <span className="text-[10px] bg-pink-50 text-pink-500 font-semibold px-1.5 py-0.5 rounded-full">Career</span>}
            {s.confirmed && <span className="text-[10px] bg-green-50 text-green-600 font-semibold px-1.5 py-0.5 rounded-full">Confirmed</span>}
          </div>
        </div>
      ))}
      <p className="text-xs text-[#86868b] pt-1">
        Sessions at Anthropic, NVIDIA & Microsoft include a career insights segment: what ML looks like at each company and how to break in.
      </p>
    </div>
  )
}

function MentorDetail() {
  return (
    <div className="mt-4 p-4 rounded-xl bg-[#f5f5f7]">
      <div className="flex items-center gap-3 mb-3">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQHH3cCdo2E1iA/profile-displayphoto-crop_800_800/B4EZxtNDaDIYAI-/0/1771358665567?e=1775692800&v=beta&t=LgXWJZWfnvudWPiKJk5uuRBSRTPQRybXgN4_EqxtubE"
          alt="Yash Dixit"
          style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <div>
          <p className="font-semibold text-sm text-[#1d1d1f]">Yash Dixit</p>
          <p className="text-xs text-[#86868b]">AI/ML Product Manager · Apple</p>
        </div>
      </div>
      {['Bi-weekly 1:1 calls (4 sessions)', 'Personalised research roadmap', 'Paper reading guidance & feedback', 'Career advice for top AI/ML roles', 'Inside view of ML at Apple'].map(i => (
        <div key={i} className="flex items-center gap-2 text-xs text-[#4a4a4a] mb-1">
          <Star size={10} className="text-pink-500 flex-shrink-0"/>{i}
        </div>
      ))}
    </div>
  )
}

// ── Phase card (base selection) ──
const phase1Lectures = ['L1: The Inference Stack','L2: Transformer Deep Dive','L3: Prefill, Decode & KV Cache','L4: GPU Architecture & Roofline','L5: Quantization','L6: Speculative Decoding','L7: FlashAttention, Kernel Fusion & Inference Engines']
const phase2Lectures = ['L8: MoE & Model Parallelism','L9: Edge Deployment','L10: Voice Pipeline','L11: Multimodal Inference','L12: Production Systems','L13: Structured Output & Evals','L14: Fine-Tuning & Distillation for Edge']

function PhaseCard({ id, title, dates, price, originalPrice, lectures, accent, extras, earlyBird }: { id: CartItemId; title: string; dates: string; price: number; originalPrice: number; lectures: string[]; accent: string; extras?: string[]; earlyBird: boolean }) {
  const { toggle, has } = useCart()
  const [exp, setExp] = useState(false)
  const sel = has(id)
  return (
    <div className={`select-card ${sel ? 'selected' : ''}`} onClick={() => toggle(id)}>
      {sel && (
        <div className="absolute top-3.5 right-3.5 w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center">
          <Check size={11} color="white" strokeWidth={3}/>
        </div>
      )}
      {earlyBird && (
        <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 mb-2">Early Bird</span>
      )}
      <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: accent }}>{title.split('—')[0].trim()}</span>
      <h3 className="text-lg font-bold mt-1 mb-0.5" style={{ letterSpacing: '-0.02em' }}>{title.split('—')[1]?.trim() || title}</h3>
      <p className="text-xs text-[#86868b] mb-3">{dates}</p>
      <div className="mb-3">
        {earlyBird && (
          <span className="text-sm text-[#86868b] line-through mr-2">{formatPrice(originalPrice)}</span>
        )}
        <span className="text-2xl font-bold" style={{ letterSpacing: '-0.03em' }}>{formatPrice(price)}</span>
      </div>

      {/* Included items */}
      {extras && (
        <div className="mb-3 space-y-1">
          {extras.map(e => (
            <div key={e} className="flex items-center gap-1.5 text-xs text-[#4a4a4a]">
              <Check size={11} className="text-green-500 flex-shrink-0"/>{e}
            </div>
          ))}
        </div>
      )}

      <button
        onClick={e => { e.stopPropagation(); setExp(!exp) }}
        className="flex items-center gap-1 text-xs font-medium text-pink-500 hover:text-pink-700 transition-colors"
      >
        <ChevronDown size={13} className={`transition-transform ${exp ? 'rotate-180' : ''}`}/>
        {exp ? 'Hide' : 'View'} {lectures.length} lectures
      </button>
      {exp && (
        <ul className="mt-3 space-y-1" onClick={e => e.stopPropagation()}>
          {lectures.map(l => (
            <li key={l} className="text-xs text-[#6e6e73] flex items-start gap-1.5">
              <span className="text-pink-400 mt-0.5">·</span>{l}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ── Add-on row ──
interface AddOnProps {
  id: CartItemId; label: string; price: number; originalPrice: number; sub: string
  detail?: React.ReactNode; earlyBird: boolean
}
function AddOnRow({ id, label, price, originalPrice, sub, detail, earlyBird }: AddOnProps) {
  const { toggle, has } = useCart()
  const [exp, setExp] = useState(false)
  const sel = has(id)
  return (
    <div className={`rounded-2xl border transition-all ${sel ? 'border-pink-500 bg-[#fff5fb]' : 'border-[#e8e8ed] bg-white'}`}>
      <div
        className="flex items-center gap-3 p-4 cursor-pointer select-none"
        onClick={() => toggle(id)}
      >
        {/* Checkbox */}
        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${sel ? 'bg-pink-500 border-pink-500' : 'border-[#c7c7cc] bg-white'}`}>
          {sel && <Check size={11} color="white" strokeWidth={3}/>}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-[#1d1d1f] text-sm">{label}</p>
            {earlyBird && <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600">Early Bird</span>}
          </div>
          <p className="text-xs text-[#86868b] mt-0.5">{sub}</p>
        </div>
        <div className="text-right flex-shrink-0">
          {earlyBird && <p className="text-xs text-[#86868b] line-through">+{formatPrice(originalPrice)}</p>}
          <p className="font-bold text-[#1d1d1f]">+{formatPrice(price)}</p>
        </div>
        {detail && (
          <button
            onClick={e => { e.stopPropagation(); setExp(!exp) }}
            className="p-1.5 rounded-lg hover:bg-black/5 transition-colors ml-1 flex-shrink-0"
          >
            <ChevronDown size={14} className={`text-[#86868b] transition-transform ${exp ? 'rotate-180' : ''}`}/>
          </button>
        )}
      </div>
      {exp && detail && (
        <div className="px-4 pb-4" onClick={e => e.stopPropagation()}>
          {detail}
        </div>
      )}
    </div>
  )
}

function EarlyBirdBanner() {
  const { mounted, isActive, spotsRemaining, totalSpots, days, hours, minutes, seconds } = useEarlyBird()

  if (!mounted || !isActive) return null

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="mb-10 p-5 rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Flame size={16} className="text-orange-500"/>
            <p className="text-sm font-bold text-[#1d1d1f]">Early Bird Pricing — Ends April 1</p>
          </div>
          <p className="text-xs text-[#6e6e73]">
            All prices below are early bird rates. After April 1, prices will increase.
          </p>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="text-center">
            <p className="text-lg font-bold text-orange-600">{spotsRemaining}</p>
            <p className="text-[10px] text-[#86868b] uppercase tracking-wider">spots left</p>
          </div>
          <div className="w-px h-8 bg-orange-200"/>
          <div className="flex items-center gap-1">
            <Clock size={13} className="text-orange-500"/>
            <div className="flex items-center gap-0.5 font-mono text-sm font-bold text-[#1d1d1f]">
              <span className="bg-white rounded px-1.5 py-0.5 border border-orange-100">{pad(days)}d</span>
              <span className="text-orange-300">:</span>
              <span className="bg-white rounded px-1.5 py-0.5 border border-orange-100">{pad(hours)}h</span>
              <span className="text-orange-300">:</span>
              <span className="bg-white rounded px-1.5 py-0.5 border border-orange-100">{pad(minutes)}m</span>
              <span className="text-orange-300">:</span>
              <span className="bg-white rounded px-1.5 py-0.5 border border-orange-100">{pad(seconds)}s</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="w-full bg-orange-100 rounded-full h-1.5">
          <div
            className="bg-gradient-to-r from-orange-400 to-orange-500 h-1.5 rounded-full transition-all duration-1000"
            style={{ width: `${(spotsRemaining / totalSpots) * 100}%` }}
          />
        </div>
        <p className="text-[10px] text-[#86868b] mt-1">{spotsRemaining} of {totalSpots} early bird spots remaining</p>
      </div>
    </div>
  )
}

export default function EnrollSection() {
  const { items, total, discount, discountPct, selectAll, enrollUrl } = useCart()
  const hasBase = items.has('phase1') || items.has('phase2')
  const { mounted, isActive } = useEarlyBird()
  const earlyBird = mounted && isActive

  return (
    <section id="enroll" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" data-reveal>
          <div className="label-pill">Enroll</div>
          <h2 className="headline-lg mb-3">Choose your workshop.</h2>
          <p className="subhead max-w-lg mx-auto">
            Select what you need. Everything adjusts instantly.
          </p>
        </div>

        <EarlyBirdBanner/>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Left — options */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div data-reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-[#86868b] mb-3">Step 1 — Choose your base</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <PhaseCard
                  id="phase1"
                  title="Phase 1 — Foundations & Optimization"
                  dates="Apr 27 – May 10, 2026 · 7 lectures"
                  price={45000}
                  originalPrice={54000}
                  lectures={phase1Lectures}
                  accent="#E91E8C"
                  extras={['Hardware lab sessions included', 'Colab labs & visual guides', 'Live Zoom + recordings', 'Lifetime access']}
                  earlyBird={earlyBird}
                />
                <PhaseCard
                  id="phase2"
                  title="Phase 2 — Production & Edge Deployment"
                  dates="May 11 – May 25, 2026 · 7 lectures"
                  price={55000}
                  originalPrice={66000}
                  lectures={phase2Lectures}
                  accent="#7C3AED"
                  extras={['Hardware lab sessions included', 'Colab labs & visual guides', 'Live Zoom + recordings', 'Lifetime access']}
                  earlyBird={earlyBird}
                />
              </div>
              <div className="mt-3 p-3 rounded-xl bg-[#f5f5f7] text-xs text-[#6e6e73] text-center">
                Take both phases for {formatPrice(100000)} combined. Want the best deal? Get the entire bundle and save 15%.
              </div>
            </div>

            {/* Step 2 */}
            <div data-reveal data-delay="1">
              <p className="text-xs font-bold uppercase tracking-widest text-[#86868b] mb-3">Step 2 — Add-ons (optional)</p>
              <div className="space-y-3">
                <AddOnRow
                  id="speakers"
                  label="Guest Speaker Pass"
                  price={50000}
                  originalPrice={60000}
                  sub="All 9 sessions — Anthropic, NVIDIA, Microsoft, Apple, AnyScale, Red Hat, Amazon, Mastercard"
                  detail={<SpeakersDetail/>}
                  earlyBird={earlyBird}
                />
                <AddOnRow
                  id="research"
                  label="Research Roadmap + Code Starter"
                  price={15000}
                  originalPrice={18000}
                  sub="Personalised roadmap PDF + starter code template for your research project"
                  earlyBird={earlyBird}
                />
                <AddOnRow
                  id="mentorship"
                  label="1:1 Research Mentorship — 2 Months"
                  price={70000}
                  originalPrice={84000}
                  sub="with Yash Dixit, AI/ML Product Manager at Apple · 4 bi-weekly sessions"
                  detail={<MentorDetail/>}
                  earlyBird={earlyBird}
                />
              </div>
            </div>

            {/* Best value banner — clickable */}
            <div data-reveal data-delay="2">
              <button
                onClick={selectAll}
                className="w-full text-left p-4 rounded-2xl border-2 border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50 hover:border-pink-400 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Star size={14} className="text-pink-500"/>
                  <p className="text-sm font-bold text-[#1d1d1f]">Best Value — The Entire Bundle</p>
                </div>
                <p className="text-xs text-[#6e6e73] mb-2">
                  Phase 1 + Phase 2 + Guest Speaker Pass + Research Roadmap + Mentorship
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-[#86868b] line-through">{formatPrice(235000)}</span>
                  <span className="text-lg font-bold text-pink-600">{formatPrice(199750)}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-pink-600">SAVE 15%</span>
                  <span className="text-[11px] font-semibold text-pink-500 ml-auto">Click to select all →</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right — sticky summary */}
          <div data-reveal data-delay="2">
            <div className="sticky-price-bar" style={earlyBird ? { top: 108 } : undefined}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#86868b] mb-4">Your Workshop</p>

              {items.size === 0 ? (
                <p className="text-sm text-[#86868b] text-center py-6">
                  Select a phase to get started.
                </p>
              ) : (
                <div className="space-y-2 mb-4">
                  {Array.from(items).map(id => (
                    <div key={id} className="flex justify-between items-start text-sm">
                      <span className="text-[#1d1d1f] leading-snug pr-2">{CART_ITEMS[id].name.split('—')[0].trim()}</span>
                      <span className="font-semibold text-[#1d1d1f] flex-shrink-0">{formatPrice(CART_ITEMS[id].price)}</span>
                    </div>
                  ))}
                </div>
              )}

              {items.size > 0 && <div className="divider mb-4"/>}

              {discount > 0 && (
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm text-green-600 font-medium">Discount ({discountPct}% off)</span>
                  <span className="text-sm font-bold text-green-600">-{formatPrice(discount)}</span>
                </div>
              )}

              <div className="flex justify-between items-baseline mb-5">
                <span className="text-sm text-[#6e6e73]">Total</span>
                <span className="text-3xl font-bold" style={{ letterSpacing: '-0.03em' }}>
                  {total > 0 ? formatPrice(total) : '—'}
                </span>
              </div>

              <a
                href={hasBase ? enrollUrl : '#enroll'}
                onClick={!hasBase ? e => e.preventDefault() : undefined}
                className={`w-full flex items-center justify-center gap-2 font-bold text-lg py-4 rounded-2xl transition-all ${hasBase ? 'bg-pink-600 text-white shadow-lg shadow-pink-200 hover:bg-pink-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]' : 'opacity-40 cursor-not-allowed bg-gray-200 text-gray-400'}`}
                style={{ borderRadius: 16 }}
              >
                {hasBase ? 'Enroll Now →' : 'Select a phase first'}
              </a>
              {hasBase && (
                <p className="text-[11px] text-center text-[#6e6e73] mt-2">
                  Secure checkout · You will be redirected to our payment page.
                </p>
              )}

              {!hasBase && (
                <p className="text-[11px] text-center text-[#86868b] mt-2">
                  Add Phase 1 or Phase 2 to continue.
                </p>
              )}

              {earlyBird && (
                <div className="mt-3 p-2.5 rounded-xl bg-orange-50 border border-orange-100">
                  <p className="text-[11px] text-orange-600 font-medium text-center">
                    Early bird pricing — ends April 1
                  </p>
                </div>
              )}
              <p className="text-center text-[11px] text-[#86868b] mt-3">
                EMI available · No refunds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
