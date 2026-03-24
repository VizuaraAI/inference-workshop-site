'use client'

import { X, ShoppingCart, Trash2, ChevronRight } from 'lucide-react'
import { useCart, CART_ITEMS, formatPrice } from '@/contexts/CartContext'

export default function CartSidebar() {
  const { items, toggle, total, discount, discountPct, isOpen, setIsOpen, enrollUrl } = useCart()

  const hasBase = items.has('phase1') || items.has('phase2')

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingCart size={18} className="text-pink-500" />
            <span className="font-bold text-gray-900">Your Workshop</span>
            {items.size > 0 && (
              <span className="w-5 h-5 bg-pink-500 text-white rounded-full text-[11px] flex items-center justify-center font-bold">
                {items.size}
              </span>
            )}
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:text-pink-500 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {items.size === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <ShoppingCart size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">Your cart is empty.</p>
              <p className="text-xs mt-1">Add a phase to get started.</p>
            </div>
          ) : (
            Array.from(items).map(id => {
              const item = CART_ITEMS[id]
              return (
                <div key={id} className="flex items-start justify-between gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <p className="text-sm font-600 text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                    <p className="text-sm font-bold text-pink-500 mt-1">{formatPrice(item.price)}</p>
                  </div>
                  <button
                    onClick={() => toggle(id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 transition-colors mt-0.5"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              )
            })
          )}

          {/* Warning if add-ons without base */}
          {!hasBase && items.size > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-700">
              Add Phase 1 or Phase 2 to your workshop to complete your enrollment.
            </div>
          )}
        </div>

        {/* Footer total + CTA */}
        {items.size > 0 && (
          <div className="px-6 py-5 border-t border-gray-100 space-y-4">
            {discount > 0 && (
              <div className="flex items-center justify-between text-green-600">
                <span className="text-sm font-medium">Discount ({discountPct}% off)</span>
                <span className="text-sm font-bold">-{formatPrice(discount)}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Total</span>
              <span className="text-2xl font-black text-gray-900">{formatPrice(total)}</span>
            </div>
            <a
              href={enrollUrl}
              className="w-full flex items-center justify-center gap-2 bg-pink-600 text-white font-bold text-base py-3.5 rounded-2xl shadow-lg shadow-pink-200 hover:bg-pink-700 hover:shadow-xl transition-all"
            >
              Proceed to Enroll <ChevronRight size={16} />
            </a>
            <p className="text-center text-xs text-gray-400">
              Secure payment · EMI available · No refunds
            </p>
          </div>
        )}
      </div>
    </>
  )
}
