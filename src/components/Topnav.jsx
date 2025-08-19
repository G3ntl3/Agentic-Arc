import React from 'react'
import Connect from './Connect'
import logo from "../assets/img/logo.png"
const Topnav = () => {
  return (
    <>
      <div className=' text-white items-center flex justify-between px-20 mt-6'>
        <div><br /></div>
       <img src={logo}  className='w-70' alt="" />
        <Connect  className="w-[10px]" />
       
    </div>
      
    </>
  )
}

export default Topnav
