import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { CartContext } from '../store/Context'

function Cart() {

const contextApi = useContext(CartContext)



  return (
    <>
    <NavBar/>
    <div className=' lg:grid grid-cols-4   mt-7 space-x-10 justify-center '>
      
      {
        contextApi.cartItems.map((item,index)=>{
          return(
            <>
            <div className=''>
           <img  key={index} src={item.img}/>
           <div className='lg:mt-12  rounded-sm lg:ml-16 md:mt-16 md:ml-6 '>
           <p >Title: {item.title}</p>
           <p >Detail: {item.detail}</p>
           <p>Price: {item.price}</p>
           
           </div>
           <button className="font-bold mt-4 lg:text-center md:ml-[150px]  lg:ml-[60px]  lg:items-center   circle text-sm   rounded-full w-[120px] h-[50px] hover:text-white bg-red-400 hover:bg-red-600"
            onClick={()=>contextApi.removeFromCart(index)}>Remove from Cart </button>
           </div>
           </>
           )
        })
      }
</div>
{
  contextApi.cartItems.length == 0 &&(
    <>
    <h1 className='text-4xl text-center font-bold mt-8 '>Your Cart is Empty</h1>
    <p className='text-center   mt-5'>Please add something to the cart</p>
    </>
  )
}
{
  contextApi.cartItems.length > 0 && (
<div className='justify-center items-center lg:mt-8 lg:ml-[320px] rounded-lg'>
     <Link to='/checkout'> <button className="font-bold mt-6 lg:text-center md:ml-[150px]  lg:ml-[100px]  lg:items-center   circle text-sm   rounded w-[280px] h-[50px] bg-red-400 hover:bg-red-600 hover:text-white" >CheckOut </button></Link>  
      </div>
      )}
       <Footer/>     
      </> )
}

export default Cart
