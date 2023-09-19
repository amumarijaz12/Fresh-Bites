import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
  const textOptions = {
    strings1: ["Be The Fastest  In Delivery Your Food"],
    strings2:[ ],
    typeSpeed: 80, // Adjust typing speed here
     // Adjust backspacing speed here
    loop: []
  };
  return (
    <div className='lg:flex container'>
      <div className='lg:pt-[150px] md:pt-[100px] lg:pl-[150px]  '>
      <div className='font-bold text-4xl'>
       <Typed strings={textOptions.strings1} typeSpeed={textOptions.typeSpeed}  loop={textOptions.loop}/>
       {/* <Typed strings={textOptions.strings2} loop={textOptions.loop}/> */}
       </div>
        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur </p>
        <p> adipiscing elit ut aliquam, purus sit amet</p>
       
        <button className=" mt-4 flex  bg-yellow-400 circle p-2 gap-1 rounded-full ">
          <img className="pt-1" src="/image/signin.svg" />
          <h1 className="font-bold">Get Started </h1>
        </button>
        <img className='lg:pt-8 lg:ml-[-150px] ' src='/image/Rectangle.svg'/>
        <img className='lg:pt-1 lg:ml-[-150px] ' src='/image/Rectangle.svg'/>
      </div>
      
      <div className='lg:pl-[180px] lg:pt-4 flex'>
      <div className='pt-[50px]'>
        <img className='pt-[25px] w-8 ' src='/image/ellipse.svg'/>
        <img className='w-6  pt-[80px]'  src='/image/ellipse.svg'/>
        <img className='pt-[180px] w-6' src='/image/ellipse.svg'/>
        </div>
        <img  src='/image/hero.svg'/>
       
        <div className='pt-[150px]'>
        <img className='h-[15px]' src='/image/ellipse.svg'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
