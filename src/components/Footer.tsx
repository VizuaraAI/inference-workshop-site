import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/vizuara-logo.png" alt="Vizuara" width={32} height={32} className="rounded-lg" />
              <span className="text-white font-bold text-[15px]">Vizuara AI Labs</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Teaching engineers the full LLM inference stack — from first principles to production deployment.
            </p>
            <p className="text-sm mt-4 text-gray-500">
              Taught by Dr. Raj Dandekar · MIT PhD
            </p>
          </div>

          {/* Workshop */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Workshop</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Guest Speakers</a></li>
              <li><a href="#hardware" className="hover:text-white transition-colors">Hardware Labs</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#instructor" className="hover:text-white transition-colors">Instructor</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:raj@vizuara.ai" className="hover:text-white transition-colors">raj@vizuara.ai</a></li>
              <li><a href="https://vizuara.ai" className="hover:text-white transition-colors">vizuara.ai</a></li>
              <li><a href="https://youtube.com/@vizuara" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://linkedin.com/company/vizuara" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex items-center justify-between text-xs text-gray-600 flex-wrap gap-2">
          <span>© 2026 Vizuara AI Labs. All rights reserved.</span>
          <span>inference.vizuara.ai</span>
        </div>
      </div>
    </footer>
  )
}
