import React from 'react'
import Hero from '../component/Hero'
import WhyUs from '../component/WhyUS'
import WhyFeatures from '../component/WhyFeatures'
import CeoMessage from '../component/CeoMessage'
import AboutSection from '../component/AboutSection'
import VideoSection from '../component/VideoSection'
import FaqSection from '../component/FaqSection'
import PromoBanner from '../component/PromoBanner'
import TestimonialSlider from '../component/TestimonialSlider'
import Pricing from '../component/Pricing'

const Home = () => {
  return (
    <div>
        <Hero/>
        <WhyFeatures/>
        <WhyUs/>
        
        <CeoMessage/>
        <VideoSection/>
        <AboutSection/>
        
   
        <FaqSection/>
        <PromoBanner/>
        <TestimonialSlider/>
    </div>
  )
}

export default Home