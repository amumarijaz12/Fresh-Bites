import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
const About = () => {
  return (
    <div>
      <NavBar/>
      <div  className="background  mt-6 items-center justify-center h-[300px] mx-auto pt-[200px] pl-20">
      <h1 className=' text-4xl font-bold  text-slate-200 lg:mt-[-70px]'>About us </h1>
    </div>

    <div className='mt-[20px] ml-[80px]'>
        <h1 className='font-bold text-2xl'>From food delivery to your daily convenience companion.</h1>
        <p className='mt-[15px]'>A subsidiary of Delivery Hero, freshbites launched in Pakistan in 2023 as a food delivery platform. </p>
        <p>Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of</p>
        <p>customers in APAC.</p>
    </div>
    <div className='mt-[20px]'>
        <p className='ml-[80px]'>Powered by tech and operational excellence, freshbites has been growing its quick-commerce footprint</p>
       
    </div>
    <div className='mt-[15px] ml-[80px]'>
        <p className=''>Thanks to dedicated partners, riders, and a team united by shared values, freshbites is now providing</p> 
        <p>millions with a convenient way to get food and groceries in a few taps.</p>
    </div>
      <Footer/>
    </div>
  )
}

export default About
