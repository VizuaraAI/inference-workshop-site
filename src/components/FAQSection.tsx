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
        a: 'We offer a 7-day refund from the date of purchase if you are not satisfied. After the first live session you attend, refunds are at our discretion.',
      },
    ],
  },
  {
    group: 'Hardware',
    faqs: [
      {
        q: 'What hardware do I need?',
        a: 'Hardware labs are included in Phase 1 and Phase 2 at no extra cost. You will need: (1) Your own laptop or PC (any OS) for Lab Day 1, (2) Raspberry Pi 4 Model B for Lab Day 2, and (3) Any Android 10+ phone with 6GB+ RAM for Lab Day 3. The Jetson Orin Nano demo is to be decided — if confirmed, Dr. Raj will demo it live so you do not need to purchase one.',
      },
      {
        q: 'Do I need to buy a Jetson Orin Nano?',
        a: 'No. The Jetson Orin Nano is optional and a bit expensive. If the demo session is confirmed, Dr. Raj will run it live so you can follow along without owning the hardware. If you want to purchase one for your own experiments, you can find it on Amazon.',
      },
      {
        q: 'Which Raspberry Pi model should I buy?',
        a: 'We use the Raspberry Pi 4 Model B. It features a 1.5GHz Quad-core Cortex-A72 (BCM2711), up to 8GB LPDDR4 RAM, dual-band Wi-Fi, Bluetooth 5.0, Gigabit Ethernet, and 2x USB 3.0 ports. You can buy it on Amazon.in.',
      },
      {
        q: 'Is hardware included in the workshop fee?',
        a: 'Hardware lab sessions (instruction, lab guides, and live sessions) are included in Phase 1 and Phase 2 — there is no separate fee for lab access. However, you do need to purchase the physical hardware devices yourself. You keep them after the workshop for continued experimentation.',
      },
      {
        q: 'When should I order the hardware?',
        a: 'Order as soon as you enroll. Lab Day 1 starts the first weekend of your phase. Depending on your location, hardware can take 1–2 weeks to arrive. We recommend ordering at least 2–3 weeks before the workshop start date (Apr 27).',
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
