'use client'

import { Flame } from 'lucide-react'
import { useEarlyBird } from '@/hooks/useEarlyBird'

export default function EarlyBirdTopBar() {
  const { mounted, isActive, spotsRemaining, days, hours, minutes, seconds } = useEarlyBird()

  if (!mounted || !isActive) return null

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3 text-xs sm:text-sm font-medium">
        <Flame size={14} className="flex-shrink-0" />
        <span>Early Bird Pricing ends April 1</span>
        <span className="hidden sm:inline text-white/70">·</span>
        <span className="hidden sm:inline">{spotsRemaining} spots left</span>
        <span className="text-white/70">·</span>
        <span className="font-mono font-bold">
          {pad(days)}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
        </span>
        <a
          href="#enroll"
          className="ml-2 px-3 py-1 rounded-full bg-white text-orange-600 font-bold text-xs hover:bg-orange-50 transition-colors flex-shrink-0"
        >
          Enroll Now
        </a>
      </div>
    </div>
  )
}
