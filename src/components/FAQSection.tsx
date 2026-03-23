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
        a: 'Yes. Each phase is designed to be self-contained. Phase 1 covers foundations and optimization (quantization, speculative decoding, FlashAttention, serving engines). Phase 2 covers production and edge deployment. Taking both gives you the full picture.',
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
        a: 'We offer a 7-day refund from the date of purchase if you are not satisfied. After the first live session you attend, refunds are at our discretion.',
      },
    ],
  },
  {
    group: 'Hardware',
    faqs: [
      {
        q: 'What hardware do I need to purchase?',
        a: 'For the Hardware Lab Sessions add-on you will need: (1) Raspberry Pi 5 (4GB or 8GB) for Lab Day 2, (2) NVIDIA Jetson Orin Nano 8GB Developer Kit for Lab Day 4, and (3) Any Android 10+ phone with 6GB+ RAM for Lab Day 3. A Mac Mini is used in Lab Day 1 but is optional — you can run the same exercises on your own laptop or PC.',
      },
      {
        q: 'Can I order all the hardware together to save on shipping and customs?',
        a: 'Yes — and we strongly recommend it. Purchase your Raspberry Pi 5 and Jetson Orin Nano in a single order to avoid separate delivery and customs fees. You can buy both from Robu.in (India) or their respective official stores. Order at least 2 weeks before Lab Day 1 (Apr 25) to ensure delivery.',
      },
      {
        q: 'Which Jetson model should I buy? There are many options.',
        a: 'We recommend the Jetson Orin Nano 8GB Developer Kit — it is the cheapest Jetson model that can comfortably run LLM projects and is what the lab is designed for. Avoid the 4GB Jetson Nano (older generation) as it has limited RAM for modern LLMs. The Jetson AGX Orin and Jetson Orin NX are more powerful but significantly more expensive and not necessary for this workshop.',
      },
      {
        q: 'Do I need a Mac Mini? I only have a Windows PC.',
        a: 'No, a Mac Mini is not required. Lab Day 1 is designed around Apple Silicon (llama.cpp on Mac Mini) but all the exercises — benchmarking, first inference, model loading — can be run on any laptop or PC. We will provide equivalent instructions for Windows and Linux. If you do want to buy a Mac Mini, the M4 base model is sufficient.',
      },
      {
        q: 'Is hardware included in the workshop fee?',
        a: 'No. The Hardware Lab Sessions add-on (₹30,000) covers instruction, lab guides, and live sessions — not the physical hardware itself. You purchase and own your own devices. This also means you keep them after the workshop for continued experimentation.',
      },
      {
        q: 'When should I order the hardware?',
        a: 'Order as soon as you enroll. Lab Day 1 starts Apr 25. Depending on your location, Jetson hardware in particular can take 1–2 weeks to arrive. We recommend ordering everything at least 2–3 weeks before the lab start date.',
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
        a: 'Guest sessions are scheduled throughout Apr 24 – May 15. All dates are target dates pending speaker confirmation and may shift. You will be notified as soon as each date is confirmed. All sessions are recorded if you cannot attend live.',
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
