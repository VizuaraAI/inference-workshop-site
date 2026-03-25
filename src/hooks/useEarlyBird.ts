'use client'

import { useState, useEffect } from 'react'

const EARLY_BIRD_START = new Date('2026-03-25T00:00:00+05:30').getTime()
const EARLY_BIRD_END = new Date('2026-04-01T23:59:59+05:30').getTime()
const TOTAL_SPOTS = 52

export interface EarlyBirdState {
  mounted: boolean
  isActive: boolean
  spotsRemaining: number
  totalSpots: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

const INITIAL_STATE: EarlyBirdState = {
  mounted: false,
  isActive: true,
  spotsRemaining: TOTAL_SPOTS,
  totalSpots: TOTAL_SPOTS,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

function computeState(): EarlyBirdState {
  const now = Date.now()

  if (now >= EARLY_BIRD_END) {
    return { ...INITIAL_STATE, mounted: true, isActive: false, spotsRemaining: 0 }
  }

  if (now <= EARLY_BIRD_START) {
    return { ...INITIAL_STATE, mounted: true, days: 7 }
  }

  const progress = (now - EARLY_BIRD_START) / (EARLY_BIRD_END - EARLY_BIRD_START)
  const spotsRemaining = Math.max(0, Math.round(TOTAL_SPOTS * (1 - progress)))

  const remaining = EARLY_BIRD_END - now
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000)

  return { mounted: true, isActive: true, spotsRemaining, totalSpots: TOTAL_SPOTS, days, hours, minutes, seconds }
}

export function useEarlyBird(): EarlyBirdState {
  const [state, setState] = useState<EarlyBirdState>(INITIAL_STATE)

  useEffect(() => {
    setState(computeState())
    const interval = setInterval(() => {
      setState(computeState())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return state
}
