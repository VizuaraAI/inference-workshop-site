'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PhasesSection from '@/components/PhasesSection'
import WhoSection from '@/components/WhoSection'
import SpeakersSection from '@/components/SpeakersSection'
import ResearchSection from '@/components/ResearchSection'
import EnrollSection from '@/components/EnrollSection'
import InstructorSection from '@/components/InstructorSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Home() {
  useScrollReveal()

  return (
    <main>
      <Navbar />
      <Hero />
      <PhasesSection />
      <WhoSection />
      <SpeakersSection />
      <ResearchSection />
      <EnrollSection />
      <InstructorSection />
      <FAQSection />
      <Footer />
      <CartSidebar />
    </main>
  )
}
