'use client'

import { useState } from 'react'
import { Plus, CheckCircle2, X, FileText, Brain, Star } from 'lucide-react'
import { useCart, formatPrice } from '@/contexts/CartContext'

function MentorshipModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-700"
        >
          <X size={18} />
        </button>

        {/* Mentor profile */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="speaker-avatar"
            style={{ background: 'linear-gradient(135deg, #555555, #333333)' }}
          >
            YD
          </div>
          <div>
            <h3 className="text-xl font-black text-gray-900">Yash Dixit</h3>
            <p className="text-sm text-gray-500">AI/ML Product Manager</p>
            <span
              className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
              style={{ background: '#555555' + '18', color: '#333' }}
            >
              Apple
            </span>
          </div>
        </div>

        <div className="section-label text-xs">2-Month 1:1 Research Mentorship</div>
        <h4 className="text-lg font-bold text-gray-900 mb-3">What you'll get</h4>

        <div className="space-y-3 mb-6">
          {[
            'Bi-weekly 1:1 calls with Yash (4 sessions total)',
            'Personalised research roadmap tailored to your background and goals',
            'Paper reading guidance and feedback on your own research ideas',
            'Insight into AI/ML product development at Apple',
            'Career advice: breaking into top AI/ML roles at big tech and research labs',
            'Review of your work and actionable next steps each session',
          ].map(item => (
            <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
              <Star size={13} className="text-pink-500 mt-0.5 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-5">
          <p className="text-sm font-semibold text-gray-900 mb-1">About Yash Dixit</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Yash is an AI/ML Product Manager at Apple, where he works on on-device intelligence and ML product strategy. With deep expertise in taking AI research from paper to production, he brings a unique perspective combining engineering depth with product thinking. He has experience across Apple Silicon, CoreML, and edge AI deployment.
          </p>
        </div>

        <div className="bg-pink-50 border border-pink-100 rounded-xl p-4">
          <p className="text-sm font-bold text-pink-700 mb-1">Career Insights</p>
          <p className="text-sm text-gray-700">
            What does AI/ML at Apple look like? How do PMs and engineers collaborate on ML features? How do you transition from research to product, and what does Apple look for when hiring?
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ResearchSection() {
  const { toggle, has } = useCart()
  const researchAdded = has('research')
  const mentorshipAdded = has('mentorship')
  const [mentorOpen, setMentorOpen] = useState(false)

  return (
    <>
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="section-label">Research & Mentorship</div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Go beyond the workshop.
              <br />
              <span className="gradient-text">Build something real.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Optional add-ons to accelerate your research journey with personalised guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Research Roadmap card */}
            <div className={`card ${researchAdded ? 'border-pink-500 shadow-pink-100 shadow-lg' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-5">
                <FileText size={20} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Research Roadmap + Code Starter</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                A personalised research roadmap PDF tailored to your background and goals — covering open problems in LLM inference, recommended papers, and a timeline. Includes a curated code file starter template to begin your own inference research project.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Personalised roadmap PDF (based on your profile)',
                  'Curated open research problems in LLM inference',
                  'Recommended paper reading list',
                  'Starter code template for your research project',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="text-2xl font-black text-gray-900">{formatPrice(15000)}</div>
                  <div className="text-xs text-gray-400">add-on</div>
                </div>
                <button
                  onClick={() => toggle('research')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    researchAdded
                      ? 'bg-green-50 text-green-600 border border-green-200'
                      : 'bg-pink-500 text-white hover:bg-pink-600'
                  }`}
                >
                  {researchAdded ? <><CheckCircle2 size={15} /> Added</> : <><Plus size={15} /> Add This</>}
                </button>
              </div>
            </div>

            {/* Mentorship card */}
            <div className={`card relative overflow-hidden ${mentorshipAdded ? 'border-pink-500 shadow-pink-100 shadow-lg' : ''}`}>
              {/* Premium badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                PREMIUM
              </div>

              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center mb-5">
                <Brain size={20} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-1">1:1 Research Mentorship</h3>
              <p className="text-sm text-pink-600 font-semibold mb-3">with Yash Dixit · AI/ML PM at Apple</p>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                Two months of personalised 1:1 mentorship with Yash Dixit, AI/ML Product Manager at Apple. Bi-weekly calls, paper guidance, career advice, and direct feedback on your research ideas from someone who builds AI products at the world's most valuable company.
              </p>

              {/* Mentor mini-profile */}
              <button
                onClick={() => setMentorOpen(true)}
                className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-5 hover:bg-pink-50 transition-colors text-left"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #555, #333)' }}
                >
                  YD
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">Yash Dixit</p>
                  <p className="text-xs text-gray-500">AI/ML Product Manager · Apple</p>
                </div>
                <span className="text-xs text-pink-500 font-medium">View profile →</span>
              </button>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="text-2xl font-black text-gray-900">{formatPrice(70000)}</div>
                  <div className="text-xs text-gray-400">2 months · 4 sessions</div>
                </div>
                <button
                  onClick={() => toggle('mentorship')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    mentorshipAdded
                      ? 'bg-green-50 text-green-600 border border-green-200'
                      : 'bg-pink-500 text-white hover:bg-pink-600'
                  }`}
                >
                  {mentorshipAdded ? <><CheckCircle2 size={15} /> Added</> : <><Plus size={15} /> Add Mentorship</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {mentorOpen && <MentorshipModal onClose={() => setMentorOpen(false)} />}
    </>
  )
}
