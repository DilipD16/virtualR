import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FutureSection from './components/FutureSection'
import WorkFlow from './components/WorkFlow'
import Price from './components/Price'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    </div>
    <FutureSection />
    <WorkFlow />
    <Price />
    <Testimonial />
    <Footer />
    </>
  )
}

export default App