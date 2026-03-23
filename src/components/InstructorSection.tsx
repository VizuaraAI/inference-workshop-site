import Image from 'next/image'
import { Award } from 'lucide-react'

export default function InstructorSection() {
  return (
    <section id="instructor" className="py-24" style={{ background: '#f5f5f7' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <div data-reveal="left" className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/raj.jpeg"
                  alt="Dr. Raj Dandekar"
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2.5 shadow-lg border border-[#e8e8ed]">
                <p className="text-xs font-bold text-[#1d1d1f]">Dr. Raj Dandekar</p>
                <p className="text-xs text-[#86868b]">MIT PhD · Vizuara AI Labs</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div data-reveal="right">
            <div className="label-pill">Your Instructor</div>
            <h2 className="headline-md mb-1">Dr. Raj Dandekar</h2>
            <p className="text-pink-500 font-semibold mb-5">MIT PhD · Co-founder & Director, Vizuara AI Labs</p>

            <p className="text-[#6e6e73] leading-relaxed mb-4 text-[0.95rem]">
              Dr. Raj holds a PhD from MIT and is the co-founder and director of Vizuara AI Labs. He has built a 50,000+ subscriber YouTube channel dedicated to teaching LLMs from first principles, and has taught 200+ engineers across previous workshop cohorts.
            </p>
            <p className="text-[#6e6e73] leading-relaxed mb-6 text-[0.95rem]">
              His teaching philosophy: visual intuition first, mathematical rigour second, hands-on implementation always. Every concept is taught from scratch — no hand-waving.
            </p>

            <div className="space-y-2.5">
              {[
                'All 15 core lectures personally delivered',
                'Visual guides + Colab notebooks for every topic',
                'MIT PhD — rigorous technical foundation',
                '50K+ YouTube subscribers · 200+ engineers taught',
              ].map(item => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-[#4a4a4a]">
                  <Award size={14} className="text-pink-500 mt-0.5 flex-shrink-0"/>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
