import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from "./components/Navbar/Header"
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Aboutus from './components/Aboutus/Aboutus'
import Gallery from './components/Gallery/Gallery'
import Pricing from './components/pricing/Pricing'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Scrolling from './components/Scrolling/Scrolling'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Aboutus/>
      <Gallery/>
      <Pricing/>
     <Testimonial/>
     <Contact/>
     <Scrolling/>
     <Footer/>
    </div>
  )
}

export default App

