'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

export type CartItemId =
  | 'phase1'
  | 'phase2'
  | 'speakers'
  | 'hardware'
  | 'research'
  | 'mentorship'

export interface CartItem {
  id: CartItemId
  name: string
  price: number
  description: string
}

export const CART_ITEMS: Record<CartItemId, CartItem> = {
  phase1: {
    id: 'phase1',
    name: 'Phase 1 — Foundations & Optimization',
    price: 45000,
    description: 'Apr 20 – May 3 · 8 core lectures + 2 hardware labs',
  },
  phase2: {
    id: 'phase2',
    name: 'Phase 2 — Production & Edge Deployment',
    price: 55000,
    description: 'May 4 – May 18 · 7 core lectures + 2 hardware labs',
  },
  speakers: {
    id: 'speakers',
    name: 'Guest Speaker Pass',
    price: 30000,
    description: '8 industry experts from Anthropic, NVIDIA, Microsoft & more',
  },
  hardware: {
    id: 'hardware',
    name: 'Hardware Lab Access',
    price: 30000,
    description: '4 hands-on lab days: Mac Mini, Pi 5, Jetson, Android',
  },
  research: {
    id: 'research',
    name: 'Research Roadmap + Code Starter',
    price: 15000,
    description: 'Personalised research roadmap PDF + code file template',
  },
  mentorship: {
    id: 'mentorship',
    name: '1:1 Research Mentorship — 2 Months',
    price: 70000,
    description: 'With Yash Dixit, AI/ML Product Manager at Apple',
  },
}

interface CartContextType {
  items: Set<CartItemId>
  toggle: (id: CartItemId) => void
  has: (id: CartItemId) => boolean
  total: number
  isOpen: boolean
  setIsOpen: (v: boolean) => void
  enrollUrl: string
}

const COURSE_BASE = 'https://vizuara.ai/courses'
const BUNDLE_BASE = 'https://vizuara.ai/course-bundle'

const ENROLL_URL_MAP: Record<string, string> = {
  // Single items
  'phase1':                            `${COURSE_BASE}/course_20006357`,
  'phase2':                            `${COURSE_BASE}/course_20006404`,
  'phase1,phase2':                     `${COURSE_BASE}/course_20006441`,
  'speakers':                          `${COURSE_BASE}/course_20006463`,
  'hardware':                          `${COURSE_BASE}/course_20006483`,
  'research':                          `${COURSE_BASE}/course_20006533`,
  'mentorship':                        `${COURSE_BASE}/course_20006579`,

  // 2-item bundles
  'phase1,speakers':                   `${BUNDLE_BASE}/inference-engineering-workshop-phase-1-guest-speaker-pass`,
  'hardware,phase1':                   `${BUNDLE_BASE}/inference-engineering-workshop-phase-1-hardware-labs`,
  'phase2,speakers':                   `${BUNDLE_BASE}/inference-engineering-workshop-phase-2-guest-speaker-pass`,
  'hardware,phase2':                   `${BUNDLE_BASE}/inference-engineering-workshop-phase-2-hardware-labs`,
  'mentorship,phase1':                 `${BUNDLE_BASE}/inference-engineering-workshop-phase-1-1-1-research-mentorship-2-months-yash-dixit`,

  // 3-item bundles
  'phase1,phase2,speakers':            `${BUNDLE_BASE}/inference-engineering-workshop-phase-1-phase-2-guest-speaker-pass`,
  'hardware,phase1,phase2':            `${BUNDLE_BASE}/inference-engineering-workshop-phase-1-phase-2-hardware-labs`,
  'phase1,phase2,research':            `${BUNDLE_BASE}/inference-engineering-workshop-phase-1-phase-2-research-roadmap-code-starter`,
  'mentorship,phase1,phase2':          `${BUNDLE_BASE}/inference-engineering-workshop-phase-1-phase-2-1-1-research-mentorship-2-months-yash-dixit`,

  // 4-item bundles
  'hardware,phase1,phase2,speakers':   `${BUNDLE_BASE}/inference-engineering-workshop-phase-1-phase-2-guest-speaker-pass-hardware-labs`,
}

function getEnrollUrl(items: Set<CartItemId>): string {
  const key = Array.from(items).sort().join(',')
  if (ENROLL_URL_MAP[key]) return ENROLL_URL_MAP[key]
  // Fallback to the most relevant base course
  if (items.has('phase1') && items.has('phase2')) return `${COURSE_BASE}/course_20006441`
  if (items.has('phase1')) return `${COURSE_BASE}/course_20006357`
  if (items.has('phase2')) return `${COURSE_BASE}/course_20006404`
  return '#enroll'
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Set<CartItemId>>(new Set())
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback((id: CartItemId) => {
    setItems(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
        setIsOpen(true)
      }
      return next
    })
  }, [])

  const has = useCallback((id: CartItemId) => items.has(id), [items])

  const total = Array.from(items).reduce((sum, id) => sum + CART_ITEMS[id].price, 0)

  // Generate enrollment URL based on cart contents
  const enrollUrl = getEnrollUrl(items)

  return (
    <CartContext.Provider value={{ items, toggle, has, total, isOpen, setIsOpen, enrollUrl }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export function formatPrice(amount: number) {
  return '₹' + amount.toLocaleString('en-IN')
}
