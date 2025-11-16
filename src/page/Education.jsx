import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Service'
import Story from '../components/Story'
import Discover from '../components/Discover'
import Footer from '../components/Footer'
// import Slide from '../components/Slide'

const Education = () => {
  return (
    <>
<div>
  {/* <Slide/> */}
      <Hero/>
     

         <About/> 
<Service/>
       <Story/>
<Discover/>

</div>
<Footer/>
    </>
  )
}

export default Education
