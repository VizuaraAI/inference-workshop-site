'use client'

import { CheckCircle2 } from 'lucide-react'

const audience = [
  'Engineers transitioning into ML infrastructure or AI engineering',
  'Students targeting roles at Anthropic, NVIDIA, Microsoft, Apple, Amazon',
  'Engineers who want to go beyond using LLMs — to building inference systems',
  'Researchers who need production engineering depth alongside theory',
]

const outcomes = [
  'Answer end-to-end inference system design questions in any ML interview',
  'Explain low-latency, high-throughput, cost-optimised LLM serving at scale',
  'Deploy real LLMs on Mac Mini, Raspberry Pi 5, Android & Jetson Orin Nano',
  'Build industry-level portfolio projects from 4 hardware lab days',
  'Get career insights directly from engineers at Anthropic, NVIDIA & Microsoft',
]

export default function WhoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Who */}
          <div data-reveal>
            <div className="label-pill">Who is this for?</div>
            <h2 className="headline-lg mb-6">
              Built for engineers<br/>
              <span className="text-gradient">who want to go deep.</span>
            </h2>
            <div className="space-y-3">
              {audience.map(a => (
                <div key={a} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--ai-violet)' }} />
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Outcomes */}
          <div data-reveal data-delay="1">
            <div className="label-pill">What you will achieve</div>
            <h2 className="headline-lg mb-4">
              Leave<br/>
              <span className="text-gradient">interview-ready.</span>
            </h2>

            {/* Interview question callout */}
            <div className="rounded-2xl p-4 mb-6 border" style={{ background: 'rgba(149,101,255,0.04)', borderColor: 'rgba(149,101,255,0.15)' }}>
              <p className="text-xs font-semibold mb-1" style={{ color: 'var(--ai-violet)' }}>Top-company interview question:</p>
              <p className="text-sm text-[#1d1d1f] leading-relaxed italic">
                "Design a low-latency, high-throughput LLM inference system handling millions of requests. Walk me through the engineering trade-offs."
              </p>
              <p className="text-xs text-[#6e6e73] mt-2">Asked at Anthropic, NVIDIA, Microsoft, Meta, Google DeepMind. You will have a complete answer.</p>
            </div>

            <div className="space-y-2.5">
              {outcomes.map(o => (
                <div key={o} className="flex gap-3 items-start">
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--ai-pink)' }} />
                  <p className="text-sm text-[#4a4a4a] leading-relaxed">{o}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
