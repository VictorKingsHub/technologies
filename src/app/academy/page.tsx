import CertificateOutcomes from '@/components/academy/CertificateOutcomes'
import FAQ from '@/components/academy/FAQ'
import HeroSection from '@/components/academy/Hero'
import Pricing from '@/components/academy/Pricing'
import ProgramTimeline from '@/components/academy/ProgramTimeline'
import WhatStudentsWillLearn from '@/components/academy/WhatStudentsWillLearn'
import WhoItsFor from '@/components/academy/WhoItsFor'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <WhoItsFor />
      <WhatStudentsWillLearn />
      <ProgramTimeline />
      <Pricing />
      <CertificateOutcomes />
      <FAQ />
    </div>
  )
}

export default page
