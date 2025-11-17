import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Services'
import Story from '../components/Story'
import Discover from '../components/Discover'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import Slide from '../components/Slide'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <>
<div>
  {/* <Slide/> */}
  <Navbar/>
      <Hero/>

         <div id="about"><About/></div>
<div id="services"><Service/></div>
       <Story/>
<Discover/>

</div>
{/* <Footer/> */}
    </>
  )
}

export default Home
