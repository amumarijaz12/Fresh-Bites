import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  // State
  const [liked, setLiked] = useState(false);
  const [products, setProducts] = useState(
    [
      {
        id: 1,
        img: "/image/product1.svg",
        title: "Mie Ramen",
        detail: "lorem ipsum",
        price: "$ 20.2",
        liked: "/image/like.svg",
      },
      {
        id: 2,
        img: "/image/product2.svg",
        title: "Salad Tahu",
        detail: "lorem ipsum",
        price: "$ 20.2",
        liked: "/image/like.svg",
      },
      {
        id: 3,
        img: "/image/product3.svg",
        title: "Roti Bakar",
        detail: "lorem ipsum",
        price: "$ 20.2",
        liked: "/image/like.svg",
      },
      {
        id: 4,
        img: "/image/product4.svg",
        title: "Spaghetti",
        detail: "lorem ipsum",
        price: "$ 20.2",
    
        liked: "/image/like.svg",
      },
    ]
  );

  const [favoriteMap, setFavoriteMap] = useState({});


  const handleClickAddOrRemoveFromFavorite = (productId) => {
    setFavoriteMap((list) => {
        if (favoriteMap[productId] === undefined) {
          return { ...list, [productId]: true };
        } else {
          return { ...list, [productId]: !favoriteMap[productId]}
        }
    });
    
  }




  function handleClick1(){
    setProducts((currentProducts) => {
      return [...currentProducts, ...currentProducts];
    })  
  }


  return (
    <>
      <div className="text-center pt-8 container">
        <h1 className="text-yellow-400">Our Menu</h1>
        <h1 className=" text-2xl font-bold">Our Popular Menu</h1>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        <p>adipiscing elit ut aliquam</p>
      </div>
      <div className="lg:grid grid-cols-4 md:grid grid-cols-2 w-[80%] ml-24 pt-6">
        {products.map((items) => {
          return (
            <div className="p-1">
              <div className="" key={items.id}>
                <Link to={`/item/${items.id}`}>
                  {" "}
                  <img
                    className="bg-[#f1f5f9] lg:ml-2"
                    src={items.img}
                    alt="item"
                  />
                </Link>
              </div>
              <div className="bg-white lg:justify-center">
                <h1 className="lg:text-center font-bold">{items.title}</h1>
                <p className="lg:text-center">{items.detail}</p>
                <div className="flex">
                  <p className="lg:ml-4">{items.price}</p>
                  <button onClick={() => handleClickAddOrRemoveFromFavorite(items.id)}>
                    <img
                      className={`lg:ml-[140px] sm:ml-[140px] md:ml-[100px] ml-[140px] ${
                        favoriteMap[items.id] !== undefined && favoriteMap[items.id] === true ? "bg-yellow-400" : ""
                      }`}
                      src={items.liked}
                      alt="liked"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:justify-center lg:items-center md:ml-[300px]   lg:mx-[570px] lg:pt-11 ml-[100px]">
        <button
          className="font-bold lg:text-center    lg:items-center  lg:p-1 circle text-sm   rounded-full w-[120px] h-[50px] bg-yellow-400"
          onClick={handleClick1}
        >
          <h1>More</h1> <h1>Menu</h1>{" "}
        </button>
      </div>
    </>
  );
};

export default Menu;
