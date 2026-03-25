'use client'

import { useEffect } from 'react'
import EarlyBirdTopBar from '@/components/EarlyBirdTopBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PhasesSection from '@/components/PhasesSection'
import FrameworksSection from '@/components/FrameworksSection'
import CapstonesSection from '@/components/CapstonesSection'
import HardwareSection from '@/components/HardwareSection'
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
      <EarlyBirdTopBar />
      <Navbar />
      <Hero />
      <PhasesSection />
      <FrameworksSection />
      <CapstonesSection />
      <HardwareSection />
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
