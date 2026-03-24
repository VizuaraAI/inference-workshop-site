'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Briefcase, ChevronRight } from 'lucide-react'
import { CompanyLogo } from './CompanyLogos'

interface Speaker {
  name: string; role: string; company: string; companyColor: string
  topic: string; description: string; careerInsight?: string
  avatarGrad: string; photo?: string; confirmed?: boolean; date: string
}

const speakers: Speaker[] = [
  {
    name: 'Aditya Shrivastava', role: 'ML Engineer', company: 'Anthropic', companyColor: '#C2461E',
    topic: 'LLM Inference Engineering at Anthropic',
    description: 'How Anthropic approaches LLM inference at scale — system design, latency vs. throughput tradeoffs, and what production inference looks like at one of the world\'s leading AI labs.',
    careerInsight: 'What does ML at Anthropic look like? Roles in research, inference engineering, deployment. How to get in — skills that matter, what the interview process involves, and how to stand out.',
    avatarGrad: 'linear-gradient(135deg,#E36C2F,#C94F1A)',
    photo: 'https://media.licdn.com/dms/image/v2/D4E03AQHpUJWnSZdYVg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715812464919?e=1775692800&v=beta&t=CLkWqGxeKP3aeCMduUU3LPUIu8Wb42Bisc1SrS24UvM',
    confirmed: false,
    date: 'TBD (target — pending Anthropic approval)',
  },
  {
    name: 'Shreyans Dhankhar', role: 'Senior Solutions Architect, LLM Systems', company: 'NVIDIA', companyColor: '#76B900',
    topic: 'Disaggregated Inference',
    description: 'Separating prefill and decode stages for next-generation high-throughput serving. KV cache transfer protocols, tensor parallelism in serving, and NVIDIA\'s inference stack.',
    careerInsight: 'What is ML at NVIDIA? From solutions architect to research scientist — what roles exist, what the ML org looks like, and how engineers break in from different backgrounds.',
    avatarGrad: 'linear-gradient(135deg,#76B900,#4F8000)',
    photo: 'https://media.licdn.com/dms/image/v2/D5603AQH2b5lDHzspSA/profile-displayphoto-crop_800_800/B56Z0E7a6UKMAI-/0/1773904186401?e=1775692800&v=beta&t=vusCCgPutMNpgqF7NzI4BxsRb_TB-VxdZ_w8NdMdxvk',
    confirmed: false,
    date: 'Fri May 1 (target — pending confirmation)',
  },
  {
    name: 'Harshul Jain', role: 'Senior SWE, AI/ML', company: 'Audible (Amazon)', companyColor: '#FF9900',
    topic: 'Framework-Agnostic LLM Serving Architectures',
    description: 'Runtime-agnostic design patterns for inference pipelines. MCP (Model Context Protocol) as a tool integration standard, memory solutions (mem0, Supermemory), observability (LangFuse, Opik). Live demo of open-source Agentship. Free session — Harshul declined compensation.',
    avatarGrad: 'linear-gradient(135deg,#FF9900,#E68A00)',
    photo: 'https://media.licdn.com/dms/image/v2/D4E03AQF6C1lZYWVTfw/profile-displayphoto-crop_800_800/B4EZu_tVUHHIAI-/0/1768447891317?e=1775692800&v=beta&t=YoroLGyuIYEHReZ9qyM_xP3KbVJP6Gi2j4wemUI_bgo',
    confirmed: false,
    date: 'Sun May 3 (any weekend — pending confirmation)',
  },
  {
    name: 'Suman Debnath', role: 'Technical Lead', company: 'AnyScale', companyColor: '#FF6B35',
    topic: 'Distributed Training at Scale with Ray',
    description: 'Getting started with distributed computing and training using Ray — Ray Train + Ray Data, post-training pipeline design, and how leading AI companies run training at scale.',
    avatarGrad: 'linear-gradient(135deg,#FF6B35,#E85520)',
    photo: 'https://media.licdn.com/dms/image/v2/C5603AQEiUcyQuVycPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1626459392800?e=1775692800&v=beta&t=laJbjbbstWSYWTQ3Il1OQTDAjnB8lXj07U9Aa6Qws2I',
    confirmed: true,
    date: 'Thu May 7 — CONFIRMED',
  },
  {
    name: 'Seiji Eicher', role: 'Engineer, vLLM & Ray Serve Team', company: 'AnyScale', companyColor: '#FF6B35',
    topic: 'Inference at Scale: Ray Serve + vLLM',
    description: 'Production inference architecture with Ray Serve and vLLM — how to build, scale, and maintain high-throughput serving infrastructure. Real-world case studies from AnyScale customers.',
    avatarGrad: 'linear-gradient(135deg,#7C3AED,#5B21B6)',
    photo: 'https://media.licdn.com/dms/image/v2/D5603AQEMzAiRUubgQA/profile-displayphoto-shrink_400_400/B56ZREkG_ZHQAk-/0/1736317104347?e=1775692800&v=beta&t=Uzt492h3YcoH06zqL_nv2gk1pzSjCtRAAi6j8YsNHz4',
    confirmed: true,
    date: 'Fri May 8 — CONFIRMED',
  },
  {
    name: 'Aayush Saini', role: 'SDE 2, Data and AI', company: 'Red Hat AI', companyColor: '#EE0000',
    topic: 'Next-Gen Multimodal Inference with Omni-VLLM',
    description: 'Deep dive into Omni-VLLM architecture — streaming multimodal processing across text, image, audio, and video. Comparison with separate modality servers. Contribution roadmap.',
    avatarGrad: 'linear-gradient(135deg,#EE0000,#BB0000)',
    photo: 'https://media.licdn.com/dms/image/v2/D5603AQHKg7FMDWTsTQ/profile-displayphoto-crop_800_800/B56ZqNbg4FI0AI-/0/1763309396491?e=1775692800&v=beta&t=e9pCSPyZSulRrIjkNpkxEIWCMve6gL4Edk-AvXVGf2Y',
    confirmed: true,
    date: 'Tue May 12 — CONFIRMED',
  },
  {
    name: 'Suyash Harlalka', role: 'Principal Data Scientist', company: 'Microsoft', companyColor: '#00A4EF',
    topic: 'Efficient Inference with Small Language Models',
    description: 'Quantization and compression for 1.5B–3B parameter models, continual learning and catastrophic forgetting mitigation, forward vs. reverse KL in RLHF, hands-on SLM pipeline.',
    careerInsight: 'What does ML at Microsoft look like? Research vs. engineering vs. PM roles, how to break in from academia or industry, and what hiring managers actually look for.',
    avatarGrad: 'linear-gradient(135deg,#00A4EF,#0078D4)',
    photo: 'https://media.licdn.com/dms/image/v2/C4E03AQEFyS2kUsYLtA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1557677045316?e=1775692800&v=beta&t=jz7rxy23SGKZkSKsF4_fcoCkEbKHaYOcH5wKeGdEyfQ',
    confirmed: false,
    date: 'Fri May 15 (target — May)',
  },
  {
    name: 'Shubham Panchal', role: 'Android ML Engineer', company: 'Mastercard', companyColor: '#EB001B',
    topic: 'On-Device LLM Deployment on Android',
    description: 'SmolChat-Android architecture, ONNX runtime on mobile, INT4/INT8 quantization for constrained devices, live benchmarking on real Android hardware. 3-hour hands-on session.',
    avatarGrad: 'linear-gradient(135deg,#EB001B,#B8001A)',
    photo: 'https://media.licdn.com/dms/image/v2/D5603AQGRjrRC1sQO6A/profile-displayphoto-crop_800_800/B56ZsQEazEKAAM-/0/1765501154050?e=1775692800&v=beta&t=o5pjkDlJelIGqIeUKJKrMA-tgnEA281ZEsXV3LqnY8c',
    confirmed: true,
    date: 'Sat May 9 — CONFIRMED (3-hr hardware lab)',
  },
  {
    name: 'Yash Dixit', role: 'AI/ML Product Manager · Apple (xMcK, xMIT, xIIT)', company: 'Apple', companyColor: '#555555',
    topic: 'How Inference Is Done on LLMs at Apple',
    description: 'An inside look at how Apple approaches LLM inference — on-device models, server-side systems, privacy-first architecture, and the engineering trade-offs that define Apple\'s ML stack. What does building AI at Apple actually look like?',
    careerInsight: 'Inside view of ML product and engineering roles at Apple — what the organisation looks like, what Apple AI PM and engineering roles entail, and how to position yourself for an Apple AI role.',
    avatarGrad: 'linear-gradient(135deg,#888,#444)',
    photo: 'https://media.licdn.com/dms/image/v2/D4E03AQHH3cCdo2E1iA/profile-displayphoto-crop_800_800/B4EZxtNDaDIYAI-/0/1771358665567?e=1775692800&v=beta&t=LgXWJZWfnvudWPiKJk5uuRBSRTPQRybXgN4_EqxtubE',
    confirmed: true,
    date: 'TBD — CONFIRMED',
  },
]

function Avatar({ s, size = 56 }: { s: Speaker; size?: number }) {
  const style: React.CSSProperties = {
    width: size, height: size,
    borderRadius: '50%',
    flexShrink: 0,
    objectFit: 'cover' as const,
    background: s.avatarGrad,
  }
  if (s.photo) {
    return (
      <img
        src={s.photo}
        alt={s.name}
        style={style}
        onError={e => {
          const el = e.currentTarget as HTMLImageElement
          el.style.display = 'none'
          const fallback = el.nextElementSibling as HTMLElement | null
          if (fallback) fallback.style.display = 'flex'
        }}
      />
    )
  }
  return <div style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
}

function SpeakerModal({ s, onClose }: { s: Speaker; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])
  if (!mounted) return null

  return createPortal(
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        style={{ background: '#fff', borderRadius: 22, padding: '2rem', maxWidth: 520, width: '100%', maxHeight: '85vh', overflowY: 'auto', position: 'relative', boxShadow: '0 24px 80px rgba(0,0,0,0.2)' }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', cursor: 'pointer', color: '#86868b' }}><X size={20}/></button>
        {/* Header row with circular photo */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 }}>
          <Avatar s={s} size={56} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 2 }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>{s.name}</h3>
              {s.confirmed && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999, background: '#dcfce7', color: '#166534' }}>CONFIRMED</span>}
            </div>
            <p style={{ fontSize: 13, color: '#86868b', margin: '0 0 8px' }}>{s.role}</p>
            <CompanyLogo company={s.company} height={18} />
          </div>
        </div>
        <div className="label-pill">Session</div>
        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', margin: '4px 0 10px' }}>{s.topic}</h4>
        <p style={{ color: '#6e6e73', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{s.description}</p>
        {s.careerInsight && (
          <div style={{ background: 'rgba(149,101,255,0.05)', border: '1px solid rgba(149,101,255,0.15)', borderRadius: 16, padding: 16, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Briefcase size={13} style={{ color: 'var(--ai-violet)' } as React.CSSProperties}/>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ai-violet)' }}>Career Insights Segment</span>
            </div>
            <p style={{ fontSize: 13, color: '#4a4a4a', lineHeight: 1.7, margin: 0 }}>{s.careerInsight}</p>
          </div>
        )}
        <p style={{ fontSize: 12, color: '#86868b', margin: 0 }}>📅 {s.date}</p>
      </div>
    </div>,
    document.body
  )
}

function SpeakerCard({ s }: { s: Speaker }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} className="card text-left w-full group flex flex-col" style={{ padding: '1.25rem' }}>
        {/* Circular photo + name row */}
        <div className="flex items-center gap-3 mb-3">
          <Avatar s={s} size={44} />
          <div className="min-w-0">
            <p className="font-bold text-sm text-[#1d1d1f] leading-tight truncate" style={{ letterSpacing: '-0.01em' }}>{s.name}</p>
            <p className="text-xs text-[#86868b] truncate mt-0.5">{s.role}</p>
          </div>
        </div>
        {/* Company logo + confirmed badge */}
        <div className="flex items-center justify-between mb-2.5">
          <CompanyLogo company={s.company} height={16} />
          {s.confirmed && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">CONFIRMED</span>}
        </div>
        {/* Topic grows to fill space */}
        <p className="text-sm font-semibold text-[#1d1d1f] leading-snug flex-1">{s.topic}</p>
        {s.careerInsight && (
          <div className="flex items-center gap-1 mt-2 text-[11px] font-medium" style={{ color: 'var(--ai-pink)' }}>
            <Briefcase size={10}/> Career Insights included
          </div>
        )}
        {/* Always at the bottom */}
        <div className="flex items-center gap-0.5 mt-3 text-xs text-[#86868b] group-hover:text-[#9565FF] transition-colors">
          <span>View session</span><ChevronRight size={12}/>
        </div>
      </button>
      {open && <SpeakerModal s={s} onClose={() => setOpen(false)} />}
    </>
  )
}

export default function SpeakersSection() {
  return (
    <section id="speakers" className="py-24" style={{ background: '#f5f5f7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14" data-reveal>
          <div className="label-pill">Guest Lecturers</div>
          <h2 className="headline-lg mb-4">
            Learn from engineers<br/>
            <span className="text-gradient">at the frontier.</span>
          </h2>
          <p className="subhead max-w-xl mx-auto">
            9 industry experts from Anthropic, NVIDIA, Microsoft, Apple, AnyScale, Red Hat, Amazon and Mastercard.
            Sessions at <strong>Anthropic</strong>, <strong>NVIDIA</strong>, <strong>Microsoft</strong> and <strong>Apple</strong> include a
            dedicated career insights segment.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" style={{ alignItems: 'stretch' }}>
          {speakers.map((s, i) => (
            <div key={s.name} data-reveal data-delay={String((i % 4) + 1)} className="flex">
              <SpeakerCard s={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
