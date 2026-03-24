'use client'

import { useState } from 'react'
import { CheckCircle2, FileText, BookOpen, GraduationCap, Star, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react'

const YASH_PHOTO = 'https://media.licdn.com/dms/image/v2/D4E03AQHH3cCdo2E1iA/profile-displayphoto-crop_800_800/B4EZxtNDaDIYAI-/0/1771358665567?e=1775692800&v=beta&t=LgXWJZWfnvudWPiKJk5uuRBSRTPQRybXgN4_EqxtubE'

const SAMPLE_ROADMAP_URL = 'https://drive.google.com/file/d/1a_BfVlH1cVZehGg3enuyMUCmhFmQdPmF/view?usp=sharing'
const SAMPLE_PAPER_URL = 'https://drive.google.com/file/d/1koIk3TdIbRUWj6DCK915vIkORp8s0cO4/view?usp=sharing'

// ── Roadmap preview card ──
function RoadmapPreview() {
  return (
    <div className="rounded-2xl border border-[#d2d2d7] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
          <FileText size={18} className="text-pink-600" />
        </div>
        <div>
          <p className="font-bold text-sm text-[#1d1d1f]">Sample Research Roadmap</p>
          <p className="text-[11px] text-[#86868b]">8-week structured plan with milestones</p>
        </div>
      </div>
      {/* Roadmap preview content */}
      <div className="space-y-2 mb-4">
        <p className="text-xs font-semibold text-[#1d1d1f] mb-2">Example: Vision-Language Planning for Autonomous Navigation</p>
        {[
          { week: 'Weeks 1–2', milestone: 'Literature Review & Scoping', deliverable: 'Paper matrix (12 papers), evaluation plan, research questions' },
          { week: 'Weeks 3–4', milestone: 'Data Pipeline & Distillation Setup', deliverable: 'Teacher caption generation, nano model fine-tuning scaffold' },
          { week: 'Weeks 5–6', milestone: 'Training & Ablation Experiments', deliverable: 'Models at 3 scales, benchmark results, ablation studies' },
          { week: 'Weeks 7–8', milestone: 'Analysis, Insights & Manuscript', deliverable: 'Visualisations, insight report, 6–8 page draft manuscript' },
        ].map(m => (
          <div key={m.week} className="flex gap-3 p-2.5 rounded-lg bg-white border border-[#e8e8ed]">
            <span className="text-[10px] font-bold text-pink-500 w-16 flex-shrink-0 mt-0.5">{m.week}</span>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f]">{m.milestone}</p>
              <p className="text-[11px] text-[#86868b]">{m.deliverable}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href={SAMPLE_ROADMAP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl text-white transition-all hover:opacity-90"
        style={{ background: 'var(--ai-gradient-diag)' }}
      >
        <ExternalLink size={12} /> View Full Sample Roadmap (PDF)
      </a>
    </div>
  )
}

// ── Paper preview card ──
function PaperPreview() {
  return (
    <div className="rounded-2xl border border-[#d2d2d7] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
          <BookOpen size={18} className="text-blue-600" />
        </div>
        <div>
          <p className="font-bold text-sm text-[#1d1d1f]">Sample Research Paper</p>
          <p className="text-[11px] text-[#86868b]">Student-produced, publication-ready draft</p>
        </div>
      </div>
      {/* Paper preview content */}
      <div className="p-4 rounded-xl bg-white border border-[#e8e8ed] mb-4">
        <p className="text-xs font-bold text-[#1d1d1f] mb-1 leading-snug">
          RT-DETR for Top-Down Perception in Autonomous Driving: Fine-Tuning Detection Transformers on CARLA Simulation Data
        </p>
        <p className="text-[11px] text-[#86868b] mb-2">Koti Reddy, Naman Dwivedi, Raj Dandekar, et al. — Vizuara AI Labs</p>
        <p className="text-[11px] text-[#6e6e73] leading-relaxed mb-3">
          Evaluates three detection transformer architectures — vanilla DETR, Deformable DETR, and RT-DETR — for BEV object detection in the CARLA simulator. Demonstrates RT-DETR achieves reliable detection with faster convergence, situated within the NanoVLA framework for real-time perception.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {['Detection Transformers', 'Autonomous Driving', 'CARLA Simulator', 'RT-DETR', 'BEV Perception'].map(t => (
            <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">{t}</span>
          ))}
        </div>
      </div>
      <a
        href={SAMPLE_PAPER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl text-white transition-all hover:opacity-90"
        style={{ background: 'linear-gradient(135deg, #3B82F6, #6366F1)' }}
      >
        <ExternalLink size={12} /> View Full Sample Paper (PDF)
      </a>
    </div>
  )
}

// ── Research Starter Kit Section ──
function ResearchKitSection() {
  const [showSamples, setShowSamples] = useState(false)

  return (
    <div className="mb-24">
      <div className="text-center mb-14" data-reveal>
        <div className="label-pill">Research Starter Kit</div>
        <h2 className="headline-lg mb-4">
          Start your research<br />
          <span className="text-gradient">with a head start.</span>
        </h2>
        <p className="subhead max-w-2xl mx-auto">
          Don&apos;t start from scratch. Get a personalised research roadmap tailored to your background,
          a curated reading list, and an initial research draft — so you can hit the ground running.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        {/* What you get */}
        <div className="card" data-reveal data-delay="1">
          <h3 className="text-lg font-bold text-[#1d1d1f] mb-5" style={{ letterSpacing: '-0.02em' }}>
            What&apos;s in the kit
          </h3>
          <div className="space-y-4">
            {[
              {
                icon: <FileText size={18} className="text-pink-500" />,
                title: 'Personalised Research Roadmap (PDF)',
                desc: 'An 8-week structured plan with milestones, deliverables, and acceptance criteria — tailored to your specific research interest. Includes literature review scope, data pipeline design, experiment matrix, and manuscript timeline.',
              },
              {
                icon: <BookOpen size={18} className="text-blue-500" />,
                title: 'Initial Research Draft',
                desc: 'A publication-quality starting draft with your research questions framed, methodology outlined, related work surveyed, and experiment setup defined. You don\'t start with a blank page — you start with a 6–8 page scaffold ready to build on.',
              },
              {
                icon: <GraduationCap size={18} className="text-purple-500" />,
                title: 'Curated Paper Reading List',
                desc: '12–15 handpicked papers relevant to your topic with reading order, key takeaways, and connections between papers. Includes a literature matrix template for systematic tracking.',
              },
              {
                icon: <Star size={18} className="text-amber-500" />,
                title: 'Starter Code Template',
                desc: 'A clean, documented codebase scaffold for your research project — data loading, training loop, evaluation pipeline, and experiment config. Ready to run on day one.',
              },
            ].map(item => (
              <div key={item.title} className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#f5f5f7] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#1d1d1f] mb-1">{item.title}</p>
                  <p className="text-xs text-[#6e6e73] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Example topics */}
        <div className="card" data-reveal data-delay="2">
          <h3 className="text-lg font-bold text-[#1d1d1f] mb-5" style={{ letterSpacing: '-0.02em' }}>
            Example research topics
          </h3>
          <p className="text-xs text-[#6e6e73] mb-4">
            Your roadmap is personalised to your background and goals. Here are some topics our students have worked on:
          </p>
          <div className="space-y-2.5">
            {[
              'Vision-Language Planning for Autonomous Navigation with Nano-Scale Models',
              'Knowledge Distillation for Edge LLM Deployment on Jetson',
              'Efficient Speculative Decoding for On-Device Inference',
              'RT-DETR for Real-Time BEV Perception in Driving Simulators',
              'KV Cache Compression for Memory-Constrained Serving',
              'Multimodal Inference Pipelines with Sub-200M Parameter Models',
              'Quantization-Aware Training for Mobile LLM Deployment',
              'Cache-Aware Routing for Multi-Model Inference Systems',
            ].map(topic => (
              <div key={topic} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#f5f5f7]">
                <CheckCircle2 size={13} className="text-pink-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#4a4a4a] leading-relaxed">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View samples toggle */}
      <div className="text-center mb-6" data-reveal>
        <button
          onClick={() => setShowSamples(!showSamples)}
          className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-2xl border-2 border-pink-200 text-pink-600 hover:border-pink-400 hover:bg-pink-50 transition-all"
        >
          <ChevronDown size={16} className={`transition-transform ${showSamples ? 'rotate-180' : ''}`} />
          {showSamples ? 'Hide' : 'View'} sample roadmap &amp; paper
        </button>
      </div>

      {/* Sample previews */}
      {showSamples && (
        <div className="grid md:grid-cols-2 gap-6">
          <RoadmapPreview />
          <PaperPreview />
        </div>
      )}
    </div>
  )
}

// ── Mentorship Section ──
function MentorshipSection() {
  return (
    <div>
      <div className="text-center mb-14" data-reveal>
        <div className="label-pill">1:1 Research Mentorship</div>
        <h2 className="headline-lg mb-4">
          Personal guidance from<br />
          <span className="text-gradient">an Apple AI leader.</span>
        </h2>
        <p className="subhead max-w-2xl mx-auto">
          Two months of synchronous 1:1 mentorship with Yash Dixit.
          Not pre-recorded advice — real-time, personalised sessions where he reviews your work
          and helps you navigate your AI research and career.
        </p>
      </div>

      <div className="grid lg:grid-cols-[340px_1fr] gap-8 items-start">
        {/* Mentor profile card */}
        <div className="card text-center" data-reveal data-delay="1">
          <img
            src={YASH_PHOTO}
            alt="Yash Dixit"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            style={{ border: '3px solid #e8e8ed' }}
          />
          <h3 className="text-xl font-bold text-[#1d1d1f] mb-1" style={{ letterSpacing: '-0.02em' }}>Yash Dixit</h3>
          <p className="text-sm text-[#86868b] mb-4">AI/ML Product Manager · Apple</p>

          <div className="space-y-2 text-left">
            {[
              { label: 'Apple', detail: 'AI/ML Product Manager — on-device intelligence, ML product strategy, CoreML' },
              { label: 'McKinsey', detail: 'Management Consultant — data-driven strategy for Fortune 500 clients' },
              { label: 'MIT', detail: 'Graduate research in AI/ML systems and applied machine learning' },
              { label: 'IIT', detail: 'Undergraduate engineering — top-tier technical foundation' },
            ].map(exp => (
              <div key={exp.label} className="p-2.5 rounded-lg bg-[#f5f5f7]">
                <p className="text-xs font-bold text-[#1d1d1f]">{exp.label}</p>
                <p className="text-[11px] text-[#86868b]">{exp.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What you get */}
        <div data-reveal data-delay="2">
          <div className="card mb-6">
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-5" style={{ letterSpacing: '-0.02em' }}>
              What mentorship includes
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Bi-weekly 1:1 Calls', desc: '4 synchronous sessions over 2 months. Yash personally reviews your work, gives feedback, and sets direction for the next sprint.', accent: '#E91E8C' },
                { title: 'Personalised Research Roadmap', desc: 'A research plan tailored to your background, interests, and career goals — not a generic template.', accent: '#7C3AED' },
                { title: 'Paper Reading Guidance', desc: 'Curated reading lists, paper discussion, and feedback on how to extract and apply insights from the literature.', accent: '#3B82F6' },
                { title: 'Career Strategy', desc: 'Inside view of AI roles at Apple, McKinsey, and top labs. How to position yourself, what hiring managers look for, and how to stand out.', accent: '#22C55E' },
                { title: 'Research Feedback', desc: 'Direct, actionable feedback on your drafts, experiments, and ideas — from someone who\'s shipped AI products at the world\'s most valuable company.', accent: '#FF6B35' },
                { title: 'Actionable Next Steps', desc: 'Every session ends with clear deliverables and deadlines. You always know exactly what to do next.', accent: '#EAB308' },
              ].map(item => (
                <div key={item.title} className="p-4 rounded-xl border border-[#e8e8ed] bg-[#f9f9fb]">
                  <div className="w-1.5 h-1.5 rounded-full mb-2" style={{ background: item.accent }} />
                  <p className="font-semibold text-sm text-[#1d1d1f] mb-1">{item.title}</p>
                  <p className="text-xs text-[#6e6e73] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial-style callout */}
          <div className="rounded-2xl p-5 border-2 border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50" data-reveal>
            <div className="flex items-center gap-3 mb-3">
              <img src={YASH_PHOTO} alt="Yash Dixit" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-[#1d1d1f]">Synchronous, not asynchronous</p>
                <p className="text-xs text-[#86868b]">Real-time sessions, not email exchanges</p>
              </div>
            </div>
            <p className="text-sm text-[#4a4a4a] leading-relaxed">
              Yash will personally mentor you through live video calls — reviewing your code, reading your drafts,
              and helping you think through research decisions in real time. This is the kind of mentorship that
              usually requires being at MIT or working at Apple. Now it&apos;s available to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main export ──
export default function ResearchSection() {
  return (
    <section id="research" className="py-24" style={{ background: '#f5f5f7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <ResearchKitSection />
        <MentorshipSection />
      </div>
    </section>
  )
}
