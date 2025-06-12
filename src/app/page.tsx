import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Partners from '@/components/Partners'
import FaqSection from '@/components/FaqSection'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <Partners />
    </div>
  )
}

export default Home
