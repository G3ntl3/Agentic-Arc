import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Services'
import Story from '../components/Story'
import Discover from '../components/Discover'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import Slide from '../components/Slide'

const Home = () => {
  return (
    <>
<div>
  {/* <Slide/> */}
  <Navbar/>
      <Hero/>

         <About/> 
<Service/>
       <Story/>
<Discover/>

</div>
{/* <Footer/> */}
    </>
  )
}

export default Home
