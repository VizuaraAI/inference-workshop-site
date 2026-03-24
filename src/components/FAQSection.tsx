'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqGroups = [
  {
    group: 'About the Workshop',
    faqs: [
      {
        q: 'Who is this workshop for?',
        a: 'Engineers and researchers who want to deeply understand LLM inference — from the math and code to production systems. You should be comfortable with Python and have some exposure to ML concepts. Prior experience with transformers is helpful but not required.',
      },
      {
        q: 'Can I take just Phase 1 or just Phase 2?',
        a: 'Yes. Each phase is designed to be self-contained. Phase 1 covers foundations and optimization (quantization, speculative decoding, FlashAttention, serving engines). Phase 2 covers production and edge deployment. Taking both gives you the full picture and saves you 20%.',
      },
      {
        q: 'Are sessions live or recorded?',
        a: 'All sessions are live on Zoom. Recordings are delivered after each session with lifetime access.',
      },
      {
        q: 'Is EMI available?',
        a: 'Yes. EMI options are available at checkout for most payment combinations. Contact us for details.',
      },
      {
        q: 'What is the refund policy?',
        a: 'All sales are final. We do not offer refunds. Please review the curriculum, sample content, and FAQs carefully before enrolling to make sure this workshop is the right fit for you.',
      },
    ],
  },
  {
    group: 'Research Starter Kit',
    faqs: [
      {
        q: 'How does the Research Starter Kit work?',
        a: 'It\'s fully asynchronous. You tell us your topic of interest, and we generate a personalised 8-week research roadmap (PDF) and an initial version of your research paper — complete with research questions, methodology, related work, and experiment setup. Everything is delivered to you so you can start building on it immediately.',
      },
      {
        q: 'What do I get in the research roadmap?',
        a: 'A structured 8-week plan with milestones, deliverables, acceptance criteria, a curated reading list of 12–15 papers, experiment design, and a manuscript timeline — all tailored to your specific research topic. See the sample roadmap on our site for a real example.',
      },
      {
        q: 'What is the initial research paper draft?',
        a: 'We generate a 6–8 page publication-quality scaffold based on your topic: research questions framed, methodology outlined, related work surveyed, and experiment setup defined. You don\'t start with a blank page — you start with a paper draft that\'s ready to build on.',
      },
      {
        q: 'Do I need to attend any live sessions for the Research Starter Kit?',
        a: 'No. The Research Starter Kit is entirely asynchronous. You submit your topic of interest, and we deliver the roadmap, paper draft, reading list, and starter code to you. No calls or scheduling required.',
      },
      {
        q: 'Can I choose any research topic?',
        a: 'Yes, as long as it\'s related to LLM inference, edge deployment, or the broader topics covered in the workshop. Examples include speculative decoding, KV cache compression, knowledge distillation for edge, multimodal inference pipelines, and more. We tailor everything to your specific area of interest.',
      },
    ],
  },
  {
    group: 'Research Mentorship with Yash Dixit',
    faqs: [
      {
        q: 'How does the 1:1 mentorship work?',
        a: 'You get one live 1:1 call with Yash Dixit every two weeks for 2 months (4 sessions total). Each session, Yash reviews your progress, gives direct feedback, and sets the direction for your next two-week sprint. The goal is to guide you through every step of the research process towards a publishable paper.',
      },
      {
        q: 'What is the goal of the mentorship?',
        a: 'To produce a publishable research paper. Yash will guide you from topic selection and literature review through experiment design, ablation studies, and writing — all the way to a publication-ready manuscript.',
      },
      {
        q: 'Who is Yash Dixit?',
        a: 'Yash is an AI/ML Product Manager at Apple with experience at McKinsey, MIT, and IIT. He brings a unique perspective combining deep technical AI/ML knowledge with product thinking and career strategy at the highest levels.',
      },
      {
        q: 'Are the mentorship sessions live or asynchronous?',
        a: 'Live. You have a synchronous 1:1 video call with Yash every two weeks. These are real-time conversations where he reviews your work, discusses your ideas, and helps you think through research decisions.',
      },
      {
        q: 'Can I get both the Research Starter Kit and the Mentorship?',
        a: 'Yes, and they complement each other well. The Research Starter Kit gives you the roadmap and initial paper draft to get started immediately. The Mentorship with Yash then provides ongoing live guidance as you execute on that plan and work towards publication.',
      },
    ],
  },
  {
    group: 'Guest Speakers',
    faqs: [
      {
        q: 'Can I ask speakers about AI/ML interview questions at their company?',
        a: 'Absolutely. Sessions at Anthropic, NVIDIA, Microsoft and Apple include a dedicated Career Insights segment specifically for this. You can ask about interview processes, what skills they look for, how to transition into ML roles, and what working in ML at each company actually looks like.',
      },
      {
        q: 'Can I ask speakers how to get a job at their company?',
        a: 'Yes. The career segments are designed exactly for this. Speakers from Anthropic, NVIDIA, Microsoft and Apple will share what the hiring process looks like, what backgrounds get in, what to work on, and how to stand out. This is direct, unfiltered advice — not generic career tips.',
      },
      {
        q: 'Can I ask technical questions during guest sessions?',
        a: 'Yes. All guest sessions have a Q&A segment. You can ask deep technical questions — the speakers are practitioners who built or currently work on the systems they are teaching.',
      },
      {
        q: 'What are the guest speaker session dates?',
        a: 'Guest sessions are scheduled throughout May 2026. Some speakers are confirmed; others are pending confirmation. You will be notified as soon as each date is finalized. All sessions are recorded if you cannot attend live.',
      },
      {
        q: 'Are guest speaker sessions included in the base phase fee?',
        a: 'No. The Guest Speaker Pass (₹30,000) is a separate add-on that gives you access to all 9 industry sessions. It is optional but highly recommended if you are targeting roles at top AI companies — the career insights and networking alone are worth it.',
      },
    ],
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14" data-reveal>
          <div className="label-pill">FAQ</div>
          <h2 className="headline-lg">Common questions.</h2>
        </div>

        <div className="space-y-10">
          {faqGroups.map(group => (
            <div key={group.group}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#86868b] mb-4">{group.group}</p>
              <div className="space-y-2">
                {group.faqs.map((faq, i) => {
                  const key = `${group.group}-${i}`
                  return (
                    <div key={key} className="bg-[#f9f9f9] border border-[#e8e8ed] rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpen(open === key ? null : key)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left"
                      >
                        <span className="font-semibold text-[#1d1d1f] text-sm pr-4">{faq.q}</span>
                        <ChevronDown
                          size={16}
                          className={`flex-shrink-0 transition-transform ${open === key ? 'rotate-180' : ''}`}
                          style={{ color: 'var(--ai-violet)' }}
                        />
                      </button>
                      {open === key && (
                        <div className="px-5 pb-4 text-sm text-[#6e6e73] leading-relaxed border-t border-[#e8e8ed] pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
