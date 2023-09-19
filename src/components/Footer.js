import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#fecaca] mt-6'>
    <div className='flex lg:mt-14 lg:ml-7 lg:gap-20 sm:gap-2 mt-10 container pt-10'>
    <div className='lg:ml-[140px] lg:mt-8 '>
      <h1 className="flex pt-5  font-bold">Fresh
      <h1 className=" lg:mr-[-25px] flex  lg:pl-1 font-bold">
        Bite <img  src="/image/bowl.svg" />
      </h1>
      </h1>
      <p>Teen imli, Shani Mandir,</p>
      <p>Palda, Indore MP 452001</p>
      <div className='flex gap-0 lg:gap-2 lg:pt-4 sm:flex-cols sm:gap-0'>
        <img  className='h-14  ' src='/image/insta.svg'/>
        <img  className='h-14' src='/image/faceb.svg'/>
        <img  className='h-14' src='/image/twt.svg'/>
      </div>
    </div>
    <div className='mt-10 ml-10'>
        <h1 className='font-bold'>Company</h1>
        <h1 className='pt-3'>About Us</h1>
        <h1 className='pt-2'>Career</h1>
        <h1 className='pt-2'>How It Work</h1>
    </div>
    <div className='mt-10 ml-10'>
        <h1 className='font-bold'>Policy</h1>
        <h1 className='pt-3'>FAQ</h1>
        <h1 className='pt-2'>Privacy</h1>
        <h1 className='pt-2'>Shipping</h1>
    </div>
    <div className='mt-10 ml-10'>
        
        <h1 className='font-bold flex'><img className='w-6' src='/image/ellipse.svg'/>Get In Touch</h1>
        <h1 className='pt-3'>+91 123 4567 8900</h1>
        <h1 className='pt-2'>food@example.com</h1>
        
    </div>
    </div>
    <div className='justify-center pt-14 container'>
   <div className='ml-[190px] mr-[190px]'>
    <hr className='bg-black' />
    </div>
      <h1 className='text-center pt-4'>© 2023 Fresh Bite. ALL RIGHT RESERVED.</h1>
      </div>
    </div>
  )
}

export default Footer
