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

export default function PhasesSection() {
  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
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
      </div>
    </section>
  )
}
