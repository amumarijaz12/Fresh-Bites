import React from 'react'
import { useParams } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { CartContext } from './store/Context';
import { useContext } from 'react';
const product = [
    {
      id:1,
      img: "/image/product1.svg",
      title: "Mie Ramen",
      detail: "lorem ipsum",
      price: "$ 20.2",
      liked: "/image/like.svg",
    },
    {
      id:2,
      img: "/image/product2.svg",
      title: "Salad Tahu",
      detail: "lorem ipsum",
      price: "$ 20.2",
      liked: "/image/like.svg",
    },
    {
      id:3,
      img: "/image/product3.svg",
      title: "Roti Bakar",
      detail: "lorem ipsum",
      price: "$ 20.2",
      liked: "/image/like.svg",
    },
    {
      id:4,  
      img: "/image/product4.svg",
      title: "Spaghetti",
      detail: "lorem ipsum",
      price: "$ 20.2",
      liked: "/image/like.svg",
    },
  ];
const ItemDetails = () => {
    var cartthing=0
    const {id} = useParams();
    const selecteditems = product[id-1]

    const contextApi = useContext(CartContext)
    
  return (
    <>
    <NavBar/>
        <div className='flex  lg:mt-[200px] lg:space-x-5'>
        
        <img className=' lg:pl-8  lg:h-[400px]' src={selecteditems.img}/>
        <div className=''>
            <h1 className='mt-[150px] font-bold md:ml-[150px] text-2xl lg:ml-[280px]'>{selecteditems.title}</h1>
            <p className='lg:ml-[280px] md:ml-[150px] text-xl'>Detail: {selecteditems.detail}</p>
            <h1 className='lg:ml-[280px]  md:ml-[150px] text-xl'>Price: {selecteditems.price}</h1>
            <button className="font-bold mt-4 lg:text-center md:ml-[150px]  lg:ml-[280px]  lg:items-center
              lg:p-1 circle text-sm   rounded-full w-[120px] h-[50px] bg-red-400 hover:bg-red-600 hover:text-white" 
            onClick={()=>{

                console.log("context cart items", contextApi.cartItems)
              
                const check =!!( contextApi.cartItems.find((items)=> items.id==id) )
    if(check)
    {
        console.log("already exist")
        alert("Already added")
    }
    else{
        cartthing = product[id-1];
        console.log("else running")
        contextApi.addToCart(cartthing)
    }
            }}>Add to Cart </button>
            </div>
       </div>
       <Footer/>
    </>
)
}

export default ItemDetails;
