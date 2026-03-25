'use client'

import { useState } from 'react'
import { ChevronDown, Zap, MessageCircle } from 'lucide-react'

const capstones = [
  {
    phase: 'Phase 1',
    phaseColor: '#E91E8C',
    title: 'Build a Speed-Optimized LLM Inference Server',
    subtitle: 'Combine every optimization from L1–L7 into one deployable pipeline',
    Icon: Zap,
    summary: 'Take a 7B model from raw weights to a fully optimized inference server — then benchmark every layer of the stack live.',
    steps: [
      'Start with a base Qwen3-7B model and profile baseline tok/s',
      'Apply AWQ quantization (L5), measure speedup vs quality tradeoff',
      'Enable FlashAttention with PagedAttention (L7)',
      'Add speculative decoding with a small draft model (L6)',
      'Deploy on vLLM with continuous batching and cache-aware scheduling',
      'Live benchmark: tokens/sec, time-to-first-token, throughput — with and without each optimization',
    ],
    outcome: 'Walk away with a production-grade inference server and hard numbers showing the impact of each optimization technique.',
  },
  {
    phase: 'Phase 2',
    phaseColor: '#7C3AED',
    title: 'OpenClaw-RL: Self-Improving WhatsApp AI Assistant',
    subtitle: 'A full RL pipeline where your everyday messages become training data',
    Icon: MessageCircle,
    summary: 'Build and deploy a personal AI assistant that improves from every conversation using reinforcement learning — no labeling, no datasets.',
    steps: [
      'Deploy Qwen3-4B on RunPod GPUs with SGLang for fast inference',
      'Connect OpenClaw as the WhatsApp gateway for live conversations',
      'Build a Process Reward Model with 3 independent judges scoring every response',
      'Implement GRPO training loop with Megatron-LM for online weight updates',
      'Wire up a live Next.js dashboard showing scores, GPU stats & conversations',
      'Watch the model learn your tone and preferences in real time',
    ],
    outcome: 'A complete, open-source, self-improving AI assistant stack — from inference to RL training to messaging gateway.',
    link: { label: 'OpenClaw code & setup guide', href: 'https://pods.vizuara.ai' },
  },
]

function CapstoneCard({ capstone }: { capstone: typeof capstones[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
          style={{ background: capstone.phaseColor }}
        >
          {capstone.phase} Capstone
        </span>
      </div>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${capstone.phaseColor}15` }}>
          <capstone.Icon size={18} style={{ color: capstone.phaseColor }} />
        </div>
        <div>
          <h3 className="font-bold text-[#1d1d1f]" style={{ letterSpacing: '-0.02em' }}>{capstone.title}</h3>
          <p className="text-xs text-[#86868b] mt-0.5">{capstone.subtitle}</p>
        </div>
      </div>
      <p className="text-sm text-[#4a4a4a] mb-3">{capstone.summary}</p>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-xs font-medium text-pink-500 hover:text-pink-700 transition-colors"
      >
        <ChevronDown size={13} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        {open ? 'Hide' : 'View'} project breakdown
      </button>
      {open && (
        <div className="mt-3 space-y-2">
          {capstone.steps.map((s, i) => (
            <div key={i} className="flex gap-2.5">
              <span className="text-[11px] font-bold w-5 flex-shrink-0 mt-0.5" style={{ color: capstone.phaseColor }}>{i + 1}</span>
              <p className="text-xs text-[#6e6e73]">{s}</p>
            </div>
          ))}
          <div className="mt-3 p-3 rounded-xl bg-[#f5f5f7]">
            <p className="text-xs font-medium text-[#1d1d1f]">{capstone.outcome}</p>
          </div>
          {capstone.link && (
            <a
              href={capstone.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-pink-500 hover:text-pink-700 transition-colors mt-1"
            >
              {capstone.link.label} →
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function CapstonesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10" data-reveal>
          <div className="label-pill">Capstone Projects</div>
          <h2 className="headline-lg mb-3">
            Build something<br/>
            <span className="text-gradient">you can actually ship.</span>
          </h2>
          <p className="subhead max-w-lg mx-auto">
            Each phase culminates in a hands-on capstone project that ties together everything you&apos;ve learned.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {capstones.map(c => (
            <div key={c.title} data-reveal>
              <CapstoneCard capstone={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
