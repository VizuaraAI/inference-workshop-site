import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'

export const metadata: Metadata = {
  title: 'Inference Engineering Workshop · Vizuara AI Labs',
  description:
    'A 4-week intensive workshop on LLM Inference Engineering. Taught by Dr. Raj Dandekar (MIT PhD) with 8 industry guest lecturers from Anthropic, NVIDIA, Microsoft, and more.',
  keywords: ['LLM inference', 'AI workshop', 'machine learning', 'vLLM', 'transformer', 'Vizuara'],
  openGraph: {
    title: 'Inference Engineering Workshop · Vizuara AI Labs',
    description: 'Master the full LLM inference stack — from transformer internals to production edge deployment.',
    url: 'https://inference.vizuara.ai',
    siteName: 'Vizuara AI Labs',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
