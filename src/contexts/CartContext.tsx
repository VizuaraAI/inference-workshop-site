'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

export type CartItemId =
  | 'phase1'
  | 'phase2'
  | 'speakers'
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
    description: 'Apr 27 – May 10 · 7 core lectures + hardware labs included',
  },
  phase2: {
    id: 'phase2',
    name: 'Phase 2 — Production & Edge Deployment',
    price: 55000,
    description: 'May 11 – May 25 · 7 core lectures + hardware labs included',
  },
  speakers: {
    id: 'speakers',
    name: 'Guest Speaker Pass',
    price: 30000,
    description: '9 industry experts from Anthropic, NVIDIA, Microsoft & more',
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
  selectAll: () => void
  total: number
  discount: number
  discountPct: number
  isOpen: boolean
  setIsOpen: (v: boolean) => void
  enrollUrl: string
}

const BUNDLE_BASE = 'https://vizuara.ai/course-bundle'
const COURSE_BASE = 'https://vizuara.ai/courses'

const ENROLL_URL_MAP: Record<string, string> = {
  // Single items
  'phase1':                            `${COURSE_BASE}/course_20006357`,
  'phase2':                            `${COURSE_BASE}/course_20006404`,
  'speakers':                          `${COURSE_BASE}/course_20006463`,
  'research':                          `${COURSE_BASE}/course_20006533`,
  'mentorship':                        `${COURSE_BASE}/course_20006579`,

  // Phase 1 + Phase 2 (20% discount)
  'phase1,phase2':                     `${COURSE_BASE}/course_20006441`,

  // 2-item bundles (no discount, just sum)
  'phase1,speakers':                   `${BUNDLE_BASE}/bundle_10003445`,
  'phase2,speakers':                   `${BUNDLE_BASE}/bundle_10003580`,
  'phase1,research':                   `${BUNDLE_BASE}/bundle_10004188`,
  'phase2,research':                   `${BUNDLE_BASE}/bundle_10004268`,
  'mentorship,phase2':                 `${BUNDLE_BASE}/bundle_10004102`,
  'mentorship,phase1':                 `${BUNDLE_BASE}/bundle_10004000`,

  // 3-item bundles
  'phase1,phase2,speakers':            `${BUNDLE_BASE}/bundle_10003710`,
  'phase1,phase2,research':            `${BUNDLE_BASE}/bundle_10003900`,
  'mentorship,phase1,phase2':          `${BUNDLE_BASE}/bundle_10004000`,

  // 4-item bundles
  'phase1,phase2,research,speakers':   `${BUNDLE_BASE}/inference-engineering-workshop-phase-1-phase-2-guest-speaker-pass-research-roadmap-starter-kit`,
  'mentorship,phase1,phase2,speakers': `${BUNDLE_BASE}/bundle_10003710`,
  'mentorship,phase1,phase2,research': `${BUNDLE_BASE}/bundle_10003900`,

  // The entire bundle (20% discount)
  'mentorship,phase1,phase2,research,speakers': `${BUNDLE_BASE}/bundle_10004342`,
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

function getDiscount(items: Set<CartItemId>): number {
  const all: CartItemId[] = ['phase1', 'phase2', 'speakers', 'research', 'mentorship']
  const hasAll = all.every(id => items.has(id))

  // Entire bundle: raw 215,000 → 156,000 (save 59,000 = ~27% off)
  if (hasAll) return 59000

  // Whenever both phases are selected: save 20,000
  if (items.has('phase1') && items.has('phase2')) return 20000

  return 0
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

  const selectAll = useCallback(() => {
    setItems(new Set<CartItemId>(['phase1', 'phase2', 'speakers', 'research', 'mentorship']))
    setIsOpen(true)
  }, [])

  const subtotal = Array.from(items).reduce((sum, id) => sum + CART_ITEMS[id].price, 0)
  const discount = getDiscount(items)
  const total = subtotal - discount
  const discountPct = subtotal > 0 ? Math.round((discount / subtotal) * 100) : 0

  // Generate enrollment URL based on cart contents
  const enrollUrl = getEnrollUrl(items)

  return (
    <CartContext.Provider value={{ items, toggle, has, selectAll, total, discount, discountPct, isOpen, setIsOpen, enrollUrl }}>
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
