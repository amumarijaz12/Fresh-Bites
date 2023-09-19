import React from 'react';
import '../../style.css';
const Review = () => {
  return (
    <>
    <div className='lg:flex lg:ml-28 lg:mt-7'>
    <div>

      <img src='/image/hero1.svg'/>
      <div className='lg:flex  lg:ml-[-20px]'>
      <img className='lg:ml-[15px]' src='/image/hero2.svg'/>
      <img  className='lg:ml-[-15px]' src='/image/hero3.svg'/>
       </div>
      </div>
      <div className='items-center justify-center lg:pt-10 lg:ml-14'>
        <h1 className='text-yellow-400'>What the say</h1>
        <h1 className='font-bold text-2xl'>What Our Customers Say</h1> 
        <h1 className='font-bold text-2xl'> About Us</h1>
        <img src='/image/card-testi.svg'/>
      </div>
      </div>
      <div  className="background text-center items-center justify-center w-[80%] mx-auto pt-44">
      <h1 className='text-center text-2xl font-bold  text-slate-200 lg:mt-[-70px]'>Join our member and get </h1>
      <h1 className='text-center text-2xl font-bold text-slate-200 '>discount up to 50%</h1> 
     <div className='lg:ml-[350px] ml-[100px] md:ml-[200px] mt-4 pb-4'>
      <button className="flex lg:ml-24 justify-center bg-yellow-400 circle p-2 gap-1 rounded-full ">
            <img className='pt-1' src='/image/signin.svg'/>
            <h1 className="font-bold">Sign up </h1>
            </button>
            </div>
      </div>
     
    </>
  )
}

export default Review
