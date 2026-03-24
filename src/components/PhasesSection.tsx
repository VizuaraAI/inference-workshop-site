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

function PhaseLabDropdown({ title, accent, labs }: { title: string; accent: string; labs: { device: string; day: string; tasks: string }[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-[#e8e8ed] bg-[#f9f9fb] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: accent }} />
          <span className="font-bold text-sm text-[#1d1d1f]">{title}</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: accent }}>
            {labs.length} labs
          </span>
        </div>
        <ChevronDown size={16} className={`text-[#86868b] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 space-y-3">
          {labs.map(l => (
            <div key={l.device} className="p-3 rounded-xl bg-white border border-[#e8e8ed]">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-[#1d1d1f]">{l.device}</p>
              </div>
              <p className="text-[11px] font-medium mb-1" style={{ color: accent }}>{l.day}</p>
              <p className="text-xs text-[#6e6e73]">{l.tasks}</p>
            </div>
          ))}
        </div>
      )}
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

const PI4_LINK = 'https://www.amazon.in/Raspberry-Pi-Model-Controller-Electronic/dp/B07XT1QJ4S'
const JETSON_LINK = 'https://www.amazon.in/NVIDIA-Jetson-Orin-Nano-Developer/dp/B0BZJTQ5YP'

const devices = [
  { name: 'Your Own Laptop / PC', subtitle: 'Any OS · Lab Day 1', desc: 'Set up llama.cpp, run your first inference, benchmark tok/s across model sizes on your own machine.', color: '#6B7280', image: null, Illustration: LaptopIllustration, phase: 'Phase 1', phaseColor: '#E91E8C', link: null, note: 'You already have this' },
  { name: 'Raspberry Pi 4', subtitle: 'ARM · Lab Day 2', desc: 'Quantization experiments on ARM. Compare INT4 vs INT8 latency. Power-aware inference. BCM2711 · Quad-core Cortex-A72 · up to 8GB LPDDR4.', color: '#22C55E', image: 'https://m.media-amazon.com/images/I/51MN7s3mkvL._SL1000_.jpg', Illustration: null, phase: 'Phase 1', phaseColor: '#E91E8C', link: PI4_LINK, note: null },
  { name: 'Android Device', subtitle: 'Mobile · Lab Day 3', desc: 'SmolChat-Android live session with Shubham Panchal. Deploy a real LLM on your phone. Any Android 10+ with 6GB+ RAM.', color: '#3B82F6', image: null, Illustration: AndroidIllustration, phase: 'Phase 2', phaseColor: '#7C3AED', link: null, note: 'You likely already own this' },
  { name: 'Jetson Orin Nano', subtitle: 'NVIDIA CUDA · Demo (To Be Decided)', desc: 'CUDA inference on edge GPU. TensorRT-LLM on Jetson. NVIDIA Ampere · 8GB RAM · 1024-core CUDA. Demo by Dr. Raj — not yet confirmed.', color: '#EAB308', image: 'https://m.media-amazon.com/images/I/61VBGhFErtL._SL1500_.jpg', Illustration: null, phase: 'Phase 2', phaseColor: '#7C3AED', link: JETSON_LINK, note: 'Optional — Dr. Raj will demo live' },
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
                className="card rounded-2xl overflow-hidden group relative flex flex-col"
                data-reveal="scale"
                data-delay={String(i + 1)}
              >
                {/* Phase badge */}
                <span
                  className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full text-white z-10"
                  style={{ background: d.phaseColor }}
                >
                  {d.phase}
                </span>
                <div
                  className="w-full h-44 rounded-xl mb-4 flex items-center justify-center overflow-hidden"
                  style={{ background: `radial-gradient(ellipse at center, ${d.color}18, #f5f5f7)` }}
                >
                  {d.image ? (
                    <img src={d.image} alt={d.name} className="h-36 w-auto object-contain" />
                  ) : d.Illustration ? (
                    <d.Illustration />
                  ) : null}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: d.color }}>
                  {d.subtitle}
                </div>
                <h4 className="font-bold text-lg mb-2" style={{ letterSpacing: '-0.02em', color: '#1d1d1f' }}>
                  {d.name}
                </h4>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#86868b' }}>
                  {d.desc}
                </p>
                {/* Buy link or note */}
                <div className="mt-3">
                  {d.link ? (
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-opacity hover:opacity-90"
                      style={{ background: 'var(--ai-gradient-diag)' }}
                    >
                      Buy on Amazon.in →
                    </a>
                  ) : d.note ? (
                    <p className="text-xs text-[#86868b] italic">{d.note}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* Phase breakdown dropdowns */}
          <div className="mt-10 grid md:grid-cols-2 gap-5" data-reveal>
            <PhaseLabDropdown
              title="Phase 1 — Hardware Labs"
              accent="#E91E8C"
              labs={[
                { device: 'Your Own Laptop / PC', day: 'Lab Day 1', tasks: 'llama.cpp setup, first inference, tok/s benchmarks across model sizes' },
                { device: 'Raspberry Pi 4', day: 'Lab Day 2', tasks: 'ARM inference, INT4 vs INT8 quantization, latency comparison, power-aware inference' },
              ]}
            />
            <PhaseLabDropdown
              title="Phase 2 — Hardware Labs"
              accent="#7C3AED"
              labs={[
                { device: 'Android Device (Shubham Panchal)', day: 'Lab Day 3 — CONFIRMED', tasks: '3-hour workshop, SmolChat-Android, ONNX runtime, on-device LLM deployment' },
                { device: 'Jetson Orin Nano', day: 'Demo — To Be Decided', tasks: 'CUDA inference, TensorRT-LLM, GPU vs CPU throughput. Dr. Raj will demo live.' },
              ]}
            />
          </div>

          {/* Bottom note */}
          <div className="mt-6 text-center" data-reveal>
            <p className="text-sm text-[#6e6e73]">
              Lab Day 3 (Android · Shubham Panchal) is a confirmed 3-hour workshop. Jetson Orin Nano demo is to be decided. All other labs conducted by Dr. Raj Dandekar.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
