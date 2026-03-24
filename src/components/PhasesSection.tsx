'use client'

import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'

const phase1 = [
  { code: 'L1', title: 'The Inference Stack', desc: 'Full pipeline, tokenization, forward pass, autoregressive loop' },
  { code: 'L2', title: 'Transformer Deep Dive', desc: 'Attention (MHA/MQA/GQA), embeddings, positional encoding' },
  { code: 'L3', title: 'Prefill, Decode & KV Cache', desc: 'KV cache mechanics, memory requirements, decode phases' },
  { code: 'L4', title: 'GPU Architecture & Roofline', desc: 'SMs, tensor cores, compute vs. memory bound' },
  { code: 'L5', title: 'Quantization', desc: 'FP16, BF16, INT8, INT4, GPTQ, AWQ, GGUF format' },
  { code: 'L6', title: 'Speculative Decoding', desc: 'Draft-target, n-gram, EAGLE, Medusa, acceptance sampling' },
  { code: 'L7', title: 'FlashAttention, Kernel Fusion & Inference Engines', desc: 'IO-aware tiling, online softmax, fused kernels, vLLM, TensorRT-LLM, SGLang, continuous batching, PagedAttention' },
]

const phase2 = [
  { code: 'L8',  title: 'MoE & Model Parallelism', desc: 'Mixture of experts, tensor/pipeline/expert parallelism' },
  { code: 'L9',  title: 'Edge Deployment', desc: 'llama.cpp on ARM, MLX on Apple Silicon, GGUF optimization' },
  { code: 'L10', title: 'Voice Pipeline', desc: 'ASR (Whisper) → LLM → TTS (Piper), end-to-end on edge' },
  { code: 'L11', title: 'Multimodal Inference', desc: 'Vision-language models, image generation, video generation' },
  { code: 'L12', title: 'Production Systems', desc: 'Cold starts, canary deployments, multi-cloud, cache-aware routing' },
  { code: 'L13', title: 'Structured Output & Evals', desc: 'JSON schema, logit biasing, guided decoding, eval harnesses' },
  { code: 'L14', title: 'Fine-Tuning & Distillation for Edge', desc: 'LoRA, QLoRA, knowledge distillation, model-to-edge pipeline' },
]

function LectureList({ lectures, accent }: { lectures: typeof phase1; accent: string }) {
  return (
    <div className="space-y-2 mt-4">
      {lectures.map(l => (
        <div key={l.code} className="flex gap-3">
          <span className="text-[11px] font-bold w-7 flex-shrink-0 mt-0.5" style={{ color: accent }}>{l.code}</span>
          <div>
            <p className="text-sm font-semibold text-[#1d1d1f]">{l.title}</p>
            <p className="text-xs text-[#86868b]">{l.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function PhaseBlock({ title, dates, lectures, accent }: { title: string; dates: string; lectures: typeof phase1; accent: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card">
      <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: accent }}>{title}</span>
      <p className="text-xs text-[#86868b] mt-0.5 mb-4">{dates}</p>
      {[
        `${lectures.length} core lectures`,
        'Hardware lab sessions included',
        'Daily Colab labs & visual guides',
        'Live Zoom sessions + recordings',
        'Lifetime access',
      ].map(i => (
        <div key={i} className="flex items-center gap-2 text-sm text-[#4a4a4a] mb-1.5">
          <Check size={13} className="text-green-500 flex-shrink-0"/>{i}
        </div>
      ))}
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-xs font-medium text-pink-500 mt-3 hover:text-pink-700 transition-colors">
        <ChevronDown size={13} className={`transition-transform ${open ? 'rotate-180' : ''}`}/>
        {open ? 'Hide' : 'View full'} curriculum
      </button>
      {open && <LectureList lectures={lectures} accent={accent}/>}
    </div>
  )
}

// ── SVG hardware illustrations ──

function LaptopIllustration() {
  return (
    <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
      <rect x="20" y="10" width="100" height="60" rx="5" fill="#2a2a2e"/>
      <rect x="23" y="13" width="94" height="54" rx="3" fill="#1a1a2e"/>
      <rect x="28" y="20" width="60" height="3" rx="1" fill="#76B900" opacity="0.7"/>
      <rect x="28" y="26" width="45" height="2" rx="1" fill="#fff" opacity="0.25"/>
      <rect x="28" y="31" width="52" height="2" rx="1" fill="#fff" opacity="0.25"/>
      <rect x="28" y="36" width="38" height="2" rx="1" fill="#fff" opacity="0.25"/>
      <rect x="28" y="44" width="55" height="2" rx="1" fill="#E91E8C" opacity="0.5"/>
      <rect x="28" y="49" width="40" height="2" rx="1" fill="#fff" opacity="0.2"/>
      <rect x="28" y="54" width="48" height="2" rx="1" fill="#fff" opacity="0.2"/>
      <circle cx="70" cy="16" r="1.5" fill="#333"/>
      <path d="M10 72 L20 70 L120 70 L130 72 L130 78 Q130 82 126 82 L14 82 Q10 82 10 78Z" fill="#d1d1d1"/>
      <rect x="30" y="74" width="80" height="5" rx="2" fill="#bbb"/>
      <rect x="52" y="74" width="36" height="4" rx="1.5" fill="#aaa"/>
    </svg>
  )
}

function RaspberryPiIllustration() {
  return (
    <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
      <rect x="8" y="10" width="134" height="90" rx="5" fill="#1a7a1a"/>
      <rect x="10" y="12" width="130" height="86" rx="4" fill="#1e8a1e"/>
      {Array.from({length:20},(_,i)=>(<rect key={`p${i}`} x={14+i*5.5} y={14} width={3} height={5} rx="0.5" fill="#c8c8c8"/>))}
      {Array.from({length:20},(_,i)=>(<rect key={`p2${i}`} x={14+i*5.5} y={20} width={3} height={5} rx="0.5" fill="#a0a0a0"/>))}
      <rect x="45" y="38" width="45" height="40" rx="2" fill="#111"/>
      <rect x="48" y="41" width="39" height="34" rx="1" fill="#222"/>
      <text x="67" y="62" textAnchor="middle" fontFamily="monospace" fontSize="5" fill="#555">BCM2711</text>
      <rect x="14" y="42" width="24" height="18" rx="1" fill="#1a1a2e"/>
      <text x="26" y="54" textAnchor="middle" fontFamily="monospace" fontSize="4.5" fill="#4466aa">LPDDR4</text>
      <rect x="115" y="38" width="22" height="9" rx="1" fill="#333"/>
      <rect x="115" y="50" width="22" height="9" rx="1" fill="#333"/>
      <rect x="115" y="65" width="22" height="16" rx="1" fill="#222"/>
      <rect x="14" y="78" width="16" height="12" rx="1" fill="#111"/>
      <rect x="34" y="78" width="16" height="12" rx="1" fill="#111"/>
      <rect x="56" y="78" width="12" height="10" rx="3" fill="#444"/>
      <circle cx="96" cy="84" r="5" fill="#C51A4A" opacity="0.9"/>
      <circle cx="96" cy="84" r="2.5" fill="#ff4488"/>
    </svg>
  )
}

function AndroidIllustration() {
  return (
    <svg width="80" height="130" viewBox="0 0 80 130" fill="none">
      <rect x="5" y="5" width="70" height="120" rx="12" fill="#1a1a2e"/>
      <rect x="8" y="8" width="64" height="114" rx="10" fill="#12121e"/>
      <rect x="10" y="18" width="60" height="90" rx="4" fill="#1e2d40"/>
      <rect x="14" y="24" width="52" height="3" rx="1" fill="#3DDC84" opacity="0.8"/>
      <rect x="14" y="30" width="38" height="2" rx="1" fill="#ffffff" opacity="0.3"/>
      <rect x="14" y="35" width="45" height="2" rx="1" fill="#ffffff" opacity="0.3"/>
      <rect x="14" y="40" width="30" height="2" rx="1" fill="#ffffff" opacity="0.3"/>
      <rect x="14" y="50" width="52" height="2" rx="1" fill="#3DDC84" opacity="0.5"/>
      <rect x="14" y="56" width="42" height="2" rx="1" fill="#ffffff" opacity="0.25"/>
      <rect x="14" y="62" width="48" height="2" rx="1" fill="#ffffff" opacity="0.25"/>
      <rect x="14" y="68" width="35" height="2" rx="1" fill="#ffffff" opacity="0.25"/>
      <rect x="14" y="78" width="52" height="16" rx="3" fill="#3DDC84" opacity="0.15"/>
      <text x="40" y="90" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="6" fill="#3DDC84" fontWeight="bold">SmolChat</text>
      <rect x="28" y="112" width="24" height="4" rx="2" fill="#333"/>
      <circle cx="40" cy="13" r="2" fill="#333"/>
    </svg>
  )
}

function JetsonIllustration() {
  return (
    <svg width="155" height="115" viewBox="0 0 155 115" fill="none">
      <rect x="5" y="8" width="145" height="99" rx="4" fill="#1a1a1a"/>
      <rect x="7" y="10" width="141" height="95" rx="3" fill="#111"/>
      <rect x="28" y="18" width="80" height="55" rx="3" fill="#2a2a2a"/>
      {Array.from({length:9},(_,i)=>(<rect key={`h${i}`} x={30+i*8} y={20} width={5} height={51} rx="0.5" fill="#222"/>))}
      <rect x="28" y="18" width="80" height="55" rx="3" fill="none" stroke="#76B900" strokeWidth="1" strokeOpacity="0.6"/>
      <text x="68" y="49" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="7" fill="#76B900" fontWeight="bold" letterSpacing="1">NVIDIA</text>
      <text x="68" y="58" textAnchor="middle" fontFamily="monospace" fontSize="5" fill="#555">Orin Nano</text>
      {Array.from({length:14},(_,i)=>(<rect key={`j${i}`} x={28+i*5.5} y={78} width={3} height={6} rx="0.5" fill="#888"/>))}
      <rect x="118" y="22" width="25" height="10" rx="1" fill="#222"/>
      <rect x="118" y="36" width="25" height="10" rx="1" fill="#222"/>
      <rect x="118" y="52" width="25" height="14" rx="1" fill="#1a1a1a"/>
      <rect x="10" y="88" width="16" height="12" rx="1" fill="#222"/>
      <rect x="30" y="88" width="16" height="12" rx="1" fill="#222"/>
      <rect x="50" y="88" width="10" height="10" rx="3" fill="#333"/>
      <circle cx="15" cy="25" r="4" fill="#76B900" opacity="0.8"/>
      <circle cx="15" cy="25" r="2" fill="#a0e000"/>
    </svg>
  )
}

const devices = [
  { name: 'Your Own Laptop / PC', subtitle: 'Any OS · Lab Day 1', desc: 'Set up llama.cpp, run your first inference, benchmark tok/s across model sizes on your own machine.', color: '#6B7280', Illustration: LaptopIllustration },
  { name: 'Raspberry Pi 4', subtitle: 'ARM · Lab Day 2', desc: 'Quantization experiments on ARM. Compare INT4 vs INT8 latency. Power-aware inference on a 1.5GHz Quad-core Cortex-A72.', color: '#22C55E', Illustration: RaspberryPiIllustration },
  { name: 'Android Device', subtitle: 'Mobile · Lab Day 3', desc: 'SmolChat-Android live session with Shubham Panchal. Deploy a real LLM on your phone.', color: '#3B82F6', Illustration: AndroidIllustration },
  { name: 'Jetson Orin Nano', subtitle: 'NVIDIA CUDA · Demo (To Be Decided)', desc: 'CUDA inference on edge GPU. TensorRT-LLM on Jetson. GPU vs CPU throughput battle. Demo by Dr. Raj — not yet confirmed.', color: '#EAB308', Illustration: JetsonIllustration },
]

const hardwareGuide = [
  { name: 'Your Own Laptop / PC', note: 'Required · Any OS', desc: 'Lab Day 1 uses llama.cpp and benchmarking tools that run on any modern laptop or desktop — macOS, Windows, or Linux.', link: null, linkLabel: null, color: '#6B7280', required: true, ownedNote: 'You already have this' },
  { name: 'Raspberry Pi 4 Model B', note: 'Required · 1.5GHz Quad-core, up to 8GB RAM', desc: 'Used in Lab Day 2 for ARM inference and quantization experiments. Broadcom BCM2711 SoC, dual-band Wi-Fi, Bluetooth 5.0, Gigabit Ethernet, 2x USB 3.0, 2x USB 2.0.', link: 'https://www.amazon.in/Raspberry-Pi-Model-Controller-Electronic/dp/B07XT1QJ4S/ref=sr_1_2?adgrpid=60451636313&dib=eyJ2IjoiMSJ9.MyyrXywvoO_Lp4MV9LeUQrWPQtLIkAqoa8MyYzD9PxHukNaUa25u-UM5sU-KXoXR82OjbL9w7L9oLRgSAV4HrCitLWPJLjvwuNjg9izqllds9stJSdgCEPX93PWVpXru6DvINKl722OAncFsGPZNhnClRqKcAtqrU2rSybahWkEms49eOmvURlzFfc_zxWaH0g3ws9Q6u2raxPL0HOr54o2TecB1w2QaodLUya1dRD0.OGVL7mSbRia9hMhrT5WMC7neoG2dowAAfCLVBhYdN0M&dib_tag=se&ext_vrnc=hi&hvadid=590712334307&hvdev=c&hvlocphy=9062088&hvnetw=g&hvqmt=e&hvrand=8055366264855012000&hvtargid=kwd-394774697183&hydadcr=24540_2265408&keywords=raspberry+pi+4+model+b&mcid=6470cf5ab0223bd3b82e1840bfd24f49&qid=1774340808&sr=8-2', linkLabel: 'Buy on Amazon.in', color: '#22C55E', required: true, ownedNote: null },
  { name: 'Android Phone', note: 'Required · Any Android 10+', desc: 'Lab Day 3 with Shubham Panchal. Any Android 10+ phone with at least 6GB RAM works. You almost certainly already own one.', link: null, linkLabel: null, color: '#3B82F6', required: true, ownedNote: 'You likely already own this' },
  { name: 'Jetson Orin Nano', note: 'Optional · Demo to be decided', desc: 'This is a bit expensive, so if you don\'t have it, it\'s fine — Dr. Raj will demo this live in the workshop. NVIDIA Ampere GPU, 8GB RAM, 1024-core CUDA. Demo session not yet confirmed.', link: 'https://www.amazon.in/NVIDIA-Jetson-Orin-Nano-Developer/dp/B0BZJTQ5YP/ref=sr_1_3?crid=U672CE2H1MM7&dib=eyJ2IjoiMSJ9.PBh_SxBbFez3MAafJsevx3UDcrZUy9TTtWmW468D5FoYphc2wQkwNQScYYsg9Jl8P3auLSn7YGUucjVIH4kbitBNEyzcoxDfPe_G_uqdJTuEC0fxkPpJW0_A8lYp6mnoXkyNpS-xLKELghbBXMcJ6wXsh9zKs9pvpRTTB06xIYwHY3BwZK6eNe4F3vdE8Nrmhi-ptCpx9ZTe0NIfnCvwPm0vFurpi_eEjP2X6LMLNMQ.qUYKsL3TyOa9bved_h9n7g9ddYNaSsmBoWynI5PPOSQ&dib_tag=se&keywords=jetson+orin+nano+super+developer+kit&qid=1774340896&sprefix=jetson+o%2Caps%2C351&sr=8-3', linkLabel: 'Buy on Amazon.in', color: '#76B900', required: false, ownedNote: null },
]

export default function PhasesSection() {
  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Curriculum header ── */}
        <div className="text-center mb-14" data-reveal>
          <div className="label-pill">Curriculum</div>
          <h2 className="headline-lg mb-4">
            Two phases.<br/>
            <span className="text-gradient">One complete education.</span>
          </h2>
          <p className="subhead max-w-xl mx-auto">
            14 lectures across 4 weeks. Each phase is self-contained — take one or both.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div data-reveal data-delay="1">
            <PhaseBlock title="Phase 1 — Foundations & Optimization" dates="Apr 27 – May 10, 2026" lectures={phase1} accent="#E91E8C"/>
          </div>
          <div data-reveal data-delay="2">
            <PhaseBlock title="Phase 2 — Production & Edge Deployment" dates="May 11 – May 25, 2026" lectures={phase2} accent="#7C3AED"/>
          </div>
        </div>

        {/* ── Hardware Labs ── */}
        <div id="hardware" className="mt-20">
          <div className="text-center mb-16" data-reveal>
            <div className="label-pill">Hardware Labs</div>
            <h2 className="headline-lg mb-4">
              Don&apos;t just learn it.
            </h2>
            <h2 className="headline-lg mb-6">
              <span className="text-gradient">Run it on real hardware.</span>
            </h2>
            <p className="subhead max-w-xl mx-auto">
              Dedicated lab days included in every phase. Every device has a different bottleneck —
              and you&apos;ll benchmark each one live.
            </p>
          </div>

          {/* Device grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {devices.map((d, i) => (
              <div
                key={d.name}
                className="card rounded-2xl overflow-hidden group"
                data-reveal="scale"
                data-delay={String(i + 1)}
              >
                <div
                  className="w-full h-44 rounded-xl mb-4 flex items-center justify-center overflow-hidden"
                  style={{ background: `radial-gradient(ellipse at center, ${d.color}18, #f5f5f7)` }}
                >
                  <d.Illustration />
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: d.color }}>
                  {d.subtitle}
                </div>
                <h4 className="font-bold text-lg mb-2" style={{ letterSpacing: '-0.02em', color: '#1d1d1f' }}>
                  {d.name}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#86868b' }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-6 text-center" data-reveal>
            <p className="text-sm text-[#6e6e73]">
              Lab Day 3 (Android · Shubham Panchal) is a confirmed 3-hour workshop. Jetson Orin Nano demo is to be decided. All other labs conducted by Dr. Raj Dandekar.
            </p>
          </div>

          {/* Hardware purchase guide */}
          <div className="mt-14" data-reveal>
            <div className="rounded-2xl border border-[#e8e8ed] bg-[#f9f9fb] p-8">
              <div className="label-pill">Hardware Guide</div>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2" style={{ letterSpacing: '-0.02em' }}>
                What you need to get started
              </h3>
              <p className="text-sm text-[#6e6e73] mb-8 max-w-2xl">
                Most labs run on hardware you already own. Only the Raspberry Pi 4 needs to be purchased separately. The Jetson Orin Nano is optional — Dr. Raj will demo it live if the session is confirmed.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {hardwareGuide.map(h => (
                  <div key={h.name} className="p-4 rounded-xl border border-[#e8e8ed] bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-bold text-sm text-[#1d1d1f]">{h.name}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${h.required ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                        {h.required ? 'Required' : 'Optional'}
                      </span>
                    </div>
                    <p className="text-[11px] font-medium mb-2" style={{ color: h.color }}>{h.note}</p>
                    <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">{h.desc}</p>
                    <div className="flex flex-col gap-1.5">
                      {h.link && (
                        <a href={h.link} target="_blank" rel="noopener noreferrer"
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg text-center transition-colors"
                          style={{ background: 'var(--ai-gradient-diag)', color: '#fff' }}>
                          {h.linkLabel} →
                        </a>
                      )}
                      {h.ownedNote && <p className="text-xs text-[#86868b] italic">{h.ownedNote}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#86868b] mt-6 text-center">
                Hardware labs are included in Phase 1 and Phase 2 — no extra fee for lab access. Hardware devices must be purchased separately. Prices and availability vary by region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
