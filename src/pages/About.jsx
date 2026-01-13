import React from 'react'
import AboutUs from '../components/about/AboutUs'
import AboutHero from '../components/about/AboutHero'
import OurStory from '../components/about/OurStory'
import Testimonials from '../components/about/Testimonials'

function About() {
  return (
    <div>
        <AboutHero/>
      <AboutUs/>
      <OurStory/>
      <Testimonials/>
      
    </div>
  )
}

export default About
