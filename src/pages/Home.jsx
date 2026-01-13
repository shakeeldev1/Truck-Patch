import React from 'react'
import HeroSlider from '../components/Home/HeroSlider'
import StatsSection from '../components/Home/StatsSection'
import DispatchSection from '../components/Home/DispatchSection'
import FeaturesSection from '../components/Home/FeaturesSection'
import ContactSection from '../components/Home/ContactSection'

function Home() {
  return (
    <main>
      <HeroSlider />
      <StatsSection />
      <DispatchSection />
      <FeaturesSection />
      <ContactSection />
    </main>
  )
}

export default Home
