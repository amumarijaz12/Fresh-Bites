import React from "react";

const Serve = () => {
  return (
    <div className="pt-[200px] container ">
      <div className="justify-center text-center">
        <h1 className="text-yellow-500">How it works</h1>
        <h1 className="font-bold">What We Serve</h1>
        <p>Product Quality Is Our Priority, And Always Guarantees </p>
        <p>Halal And Safety Until It Is In Your Hands.</p>
      </div>
      <div className='lg:grid grid-cols-3 md:ml-[140px]'>
    <button className="">
    <img className='lg:ml-[100px] ' src='/image/App.svg'/>
    <h1 className='font-bold lg:ml-[60px]'>Easy To Order</h1>
    <p className='lg:ml-[60px]'>You only order through</p>
    <p className='lg:ml-[60px]'> the app</p>
    </button>
    <button>
    <img className='lg:ml-[40px]' src='/image/delivery.svg'/>
    <h1 className='font-bold lg:mr-[75px] '>Fastest Delivery</h1>
    <p className='lg:mr-[65px]'>Delivery will be on </p>
    <p className='lg:mr-[65px]'>time</p>
    </button>
    <button>
    <img className='lg:ml-[10px]' src='/image/courier.svg'/>
    <h1 className='font-bold lg:mr-[180px]'>Best Quality</h1>
    <p className='lg:mr-[140px]'>The best quality of food </p>
    <p className='lg:mr-[140px]'>for you</p>
    </button>
    </div>
    </div>
  );
};

export default Serve;
