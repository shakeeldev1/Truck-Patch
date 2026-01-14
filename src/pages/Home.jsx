import React from 'react'
import HeroSlider from '../components/Home/HeroSlider'
import StatsSection from '../components/Home/StatsSection'
import DispatchSection from '../components/Home/DispatchSection'
import FeaturesSection from '../components/Home/FeaturesSection'
import Fulfilment from '../components/Home/Fulfilment'
import Capablities from '../components/Home/Capablities'
import OurFaq from '../components/home/OurFaq'

function Home() {
  return (
    <main>
      <HeroSlider />
      <DispatchSection />
      {/* <StatsSection /> */}
      <Fulfilment/>
      <FeaturesSection />
      <Capablities/>
     <OurFaq/>
    </main>
  )
}

export default Home
